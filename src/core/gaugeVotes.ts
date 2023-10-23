import { GaugeQuotaParams } from "../payload/gauge";
import { BigIntMath } from "../utils/math";

export type BaseVoteType = "raise" | "lower";
export type VoteType = BaseVoteType | "remove";

export interface BaseVote {
  amount: bigint;
  type: BaseVoteType;
}

export interface Vote {
  amount: bigint;
  type: VoteType;
}

export interface SingleVoteState {
  available: bigint;

  vote?: Vote;
  voteCalls: Array<Vote>;
}

export interface VoteProps {
  state: SingleVoteState;
  change?: Vote;
}

interface AddProps {
  state: SingleVoteState;
  change: BaseVote;
}

interface RemoveProps {
  state: SingleVoteState;
  change: Vote;
}

export class VoteMath {
  static vote({ change, ...rest }: VoteProps): SingleVoteState | undefined {
    if (change?.type === "remove") {
      return this.removeVotes({ ...rest, change });
    }

    if (change) {
      return this.addVotes({
        ...rest,
        change: { ...change, type: change.type },
      });
    }

    return { ...rest.state, voteCalls: [] };
  }
  private static addVotes({ state, change }: AddProps): SingleVoteState {
    const { available, vote } = state;

    if (!vote) {
      return {
        available: available - change.amount,
        vote: change,
        voteCalls: [change],
      };
    }

    if (vote.type === change.type) {
      return {
        available: available - change.amount,
        vote: { ...change, amount: vote.amount + change.amount },
        voteCalls: [change],
      };
    }

    const remove: Vote = { type: "remove", amount: vote.amount };
    return {
      available: available + vote.amount - change.amount,
      vote: { ...change, amount: change.amount },
      voteCalls: [remove, change],
    };
  }
  private static removeVotes({ state, change }: RemoveProps): SingleVoteState {
    const { available, vote } = state;

    if (!vote) return { ...state, voteCalls: [] };
    const safeChange = BigIntMath.min(vote.amount, change.amount);
    const afterVote = vote.amount - safeChange;

    return {
      available: available + safeChange,
      vote: { ...vote, amount: afterVote },
      voteCalls: [{ ...change, amount: safeChange }],
    };
  }

  static getBaseVote = (v: GaugeQuotaParams): BaseVote | undefined => {
    const voteDown = v.stakerVotesCaSide;
    const voteUp = v.stakerVotesLpSide;

    if (!voteDown && !voteUp) return undefined;

    if (voteDown > 0) {
      return { type: "lower", amount: voteDown };
    }
    if (voteUp > 0) {
      return { type: "raise", amount: voteUp };
    }
    return undefined;
  };
}
