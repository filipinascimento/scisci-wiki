# Expert review aggregation limit

## Summary

Expert review aggregation limit is the validation problem that averaging many less-expert or more distant evaluations may not recover the same information as close expert review when evaluator cognition is systematically bounded rather than merely noisy.

## Canonical Form

- Unit of analysis: proposal, evaluator group, expert score, group-average score, rank order, or funding threshold.
- Typical representation: comparison of closest-expert rankings, less-expert group averages, noise-corrected rankings, and rank divergence.
- Validation target: test whether more reviewer averaging solves review error or hides expertise-specific signal.
- Empirical signature: removing idiosyncratic noise from close-expert rankings makes them diverge from less-expert group averages, especially for high-quality proposals.

## Uses in Science of Science

- Refines the [noisy-signal peer-review null](noisy_signal_peer_review_null.md) by asking whether averaging reviewers cancels random error or averages away expertise.
- Interprets [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md), [reviewer-distance rank reshuffling](reviewer_distance_rank_reshuffling.md), and [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md).
- Provides a design warning for [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) and [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md).
- Uses the [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md) as a concrete empirical case.

## Operationalization

- Estimate proposal rankings from close experts, all reviewers, and less-expert or more distant reviewer groups.
- Remove reviewer fixed effects and measured distance effects when the design permits.
- Compare rank divergence for all proposals and for high-scoring or high-quality subsets.
- Test whether adding reviewers reduces variance only, shifts mean scores, or changes rank ordering in systematic ways.
- Interpret aggregation failure jointly with review-text evidence and downstream outcomes when available.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports that expert rank ordering appears more meaningful than averages from larger groups of less expert evaluators, particularly among the highest-quality proposals.
- The paper's supplementary rank test finds that correcting expert rankings for idiosyncratic noise makes them more different from less-expert group averages for high-quality proposals.
- Boudreau et al. argue that bounded rationality limits what can be achieved by tallying or averaging many opinions.
- The authors also state that aggregation, averaging, blinding, and other conventional policies cannot by themselves address systematic novelty discounting.

## Caveats

- Close expert review can be more discerning while also being stricter, locally conservative, or strategically biased.
- Aggregation can still be useful for reducing idiosyncratic reviewer severity or expanding expertise coverage.
- The validation requires overlapping reviewer assignments; without them, expert signal and reviewer severity are hard to separate.
- Downstream outcome data are needed to decide whether expert divergence is more accurate, not only different.

## Links

- [noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md)
- [reviewer-distance rank reshuffling](reviewer_distance_rank_reshuffling.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)
- [ex ante novelty-variance blind spot](ex_ante_novelty_variance_blindspot.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `expert_review_aggregation_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: review averaging limit; less-expert aggregation limit; expert signal aggregation caveat; bounded-rationality review aggregation
