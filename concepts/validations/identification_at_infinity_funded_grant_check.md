# Identification-at-infinity funded-grant check

## Summary

Identification-at-infinity funded-grant check restricts funded-only grant analyses to very highly scored applications with near-certain funding probability to reduce concerns about selection on unobservables.

## Canonical Form

- Unit of analysis: funded grant, review score, funding probability, selection margin, outcome, or robustness subsample.
- Typical representation: top-score subsample where funding probability approaches one and unfunded counterfactual selection is less central.
- Validation target: test whether funded-only score-outcome gradients are artifacts of unusual out-of-order funding or marginal selection.
- Empirical signature: predictive-validity coefficients persist among grants that were almost surely funded.

## Uses in Science of Science

- Strengthens [funded-only peer-review validation](funded_only_peer_review_validation.md).
- Complements [out-of-order funded grant exception](out_of_order_funded_grant_exception.md) by focusing on the high-score region where funding exceptions matter less.
- Relates to [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md) as a different way to handle selection around grant paylines.

## Operationalization

- Estimate or document funding probability as a function of review score, institute, study section, and year.
- Select the score range where funding probability is very high or effectively one.
- Re-estimate the score-outcome relationship inside that range.
- Compare results with full funded-only models and with near-threshold designs when rejected-proposal data are available.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) discusses selection concerns created by observing only funded NIH R01 grants.
- Their supplementary robustness checks restrict attention to very highly scored applications, where selection into funding is less likely to depend on unobserved quality conditional on score.
- The check supports their claim that peer-review scores contain predictive information even within funded grants.

## Caveats

- High-score ranges can have limited score variation and reduced statistical power.
- Near-certain funding does not remove all selection channels if institutes apply special policies or applicants differ within the top range.
- This check cannot answer whether rejected proposals would have outperformed funded proposals.

## Links

- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [out-of-order funded grant exception](out_of_order_funded_grant_exception.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `identification_at_infinity_funded_grant_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: high-score funded-only check; near-certain funding restriction; identification-at-infinity grant validation; top-score selection check
