# Conditional review-score dispersion test

## Summary

Distance or novelty can be tested for variance effects separately from mean score effects.

## Canonical Form

- Unit of analysis: proposal score, evaluator-proposal distance, proposal novelty, heteroskedasticity parameter, or score quintile.
- Typical representation: heteroskedasticity and quintile-dispersion check for review scores.
- Mechanism, measurement, or validation target: whether uncertainty changes rather than mean evaluation under distance or novelty.
- Empirical signature: review-score standard deviations or error multipliers remain flat across distance and novelty conditions.

## Uses in Science of Science

- Refines peer-review uncertainty validation by linking it to [noisy signal peer review null](noisy_signal_peer_review_null.md) and [ex ante novelty variance blindspot](ex_ante_novelty_variance_blindspot.md).
- Useful as a reusable check when [reviewer proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) is used in science-of-science inference.
- Creates cross-links to [proposal mesh novelty percentile](../measures/proposal_mesh_novelty_percentile.md) so the motif is not interpreted in isolation.

## Operationalization

- Compare score standard deviations across distance and novelty quintiles.
- Fit heteroskedastic error multipliers for distance and novelty.
- Test whether bounded integer scales mask meaningful dispersion changes.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports no standard-deviation differences across fifth quintiles and near-zero multiplier coefficients for both distance and novelty.
- The test rejects a simple noisy-signal explanation focused only on increased variance.

## Caveats

- Integer one-to-ten scores and bounded scales can mask subtle dispersion changes.
- No variance effect does not by itself identify the source of mean-score bias.

## Links

- [Noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [Ex ante novelty-variance blind spot](ex_ante_novelty_variance_blindspot.md)
- [Reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [Proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [Distance-novelty additivity check](distance_novelty_additivity_check.md)
- [Linear distance-response diagnostic](linear_distance_response_diagnostic.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `conditional_review_score_dispersion_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: review heteroskedasticity test; score-dispersion null; uncertainty variance diagnostic
