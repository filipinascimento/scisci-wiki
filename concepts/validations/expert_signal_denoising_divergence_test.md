# Expert-signal denoising divergence test

## Summary

Denoising closest-expert evaluations can test whether expert rankings converge with or diverge from group-average rankings.

## Canonical Form

- Unit of analysis: closest expert, proposal ranking, evaluator fixed effect, distance correction, or group-average ranking.
- Typical representation: rank-distance comparison before and after evaluator and distance denoising.
- Mechanism, measurement, or validation target: whether expert disagreement reflects noise or distinct signal.
- Empirical signature: removing expert idiosyncrasy makes expert rankings more different from less-expert group averages.

## Uses in Science of Science

- Refines expert-review validation by linking it to [expert review aggregation limit](expert_review_aggregation_limit.md) and [reviewer distance rank reshuffling](reviewer_distance_rank_reshuffling.md).
- Useful as a reusable check when [closest expert review penalty](../mechanisms/closest_expert_review_penalty.md) is used in science-of-science inference.
- Creates cross-links to [expert cue sampling bias](../mechanisms/expert_cue_sampling_bias.md) so the motif is not interpreted in isolation.

## Operationalization

- Build proposal rankings from closest-expert evaluations and from group-average scores.
- Remove evaluator fixed effects and distance effects from closest-expert scores.
- Compare rank distance before and after denoising, especially among high-quality proposals.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports that denoising expert evaluations made expert rankings more different from less-expert group averages for high-quality proposals.
- The result supports expert-specific signal rather than only noisy expert ratings.

## Caveats

- The test infers signal from rank divergence without observing true proposal quality.
- Denoising rules can embed model assumptions about distance and evaluator severity.

## Links

- [Expert review aggregation limit](expert_review_aggregation_limit.md)
- [Reviewer-distance rank reshuffling](reviewer_distance_rank_reshuffling.md)
- [Closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [Expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md)
- [Distance-adjusted expert rank correction](../methods/distance_adjusted_expert_rank_correction.md)
- [Proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `expert_signal_denoising_divergence_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: denoised expert ranking test; expert-average divergence; closest-expert signal isolation
