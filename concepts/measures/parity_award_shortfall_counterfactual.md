# Parity award-shortfall counterfactual

## Summary

The parity award-shortfall counterfactual converts a funding-rate disparity into the number of additional awards a demographic group would receive if it had the same award rate as a comparison group.

## Canonical Form

- Unit of analysis: demographic group, application pool, award mechanism, observed award count, parity award count, or award shortfall.
- Typical representation: expected awards under benchmark success rate minus observed awards.
- Measurement target: practical magnitude of a funding disparity in award counts rather than only percentage-point gaps.
- Empirical signature: the paper reports both observed awards and counterfactual awards under a parity benchmark.

## Uses in Science of Science

- Translates [NIH R01 award disparities](../validations/nih_r01_award_disparities.md) into an operational policy quantity.
- Complements model-based indicators such as [score-conditioned funding parity](../validations/score_conditioned_funding_parity.md), [priority score receipt](priority_score_receipt.md), and sequential covariate decompositions.
- Gives funders a count-scale target for equity audits, monitoring, and retrospective evaluation.
- Can be paired with [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md) to distinguish first-attempt and eventual-award shortfalls.

## Operationalization

- Define the focal demographic group, grant mechanism, cohort, and benchmark group.
- Compute the focal group's observed application count and observed award count.
- Apply the benchmark award rate to the focal group's application count to obtain counterfactual awards.
- Report the shortfall as counterfactual awards minus observed awards.
- State whether the benchmark is raw, adjusted, score-conditioned, institute-specific, or mechanism-specific.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) reports that if Black applicants had the same award rates as white applicants, they would have received 1071 RPG awards instead of 585.
- For R01 awards, the same counterfactual is 337 awards instead of 185.
- The motif turns percentage-point disparities into a count of missing awards under parity, which is easier to connect to policy capacity and budget scenarios.

## Caveats

- A parity counterfactual is descriptive unless the benchmark rate is causally justified.
- The result depends on the chosen comparison group, grant mechanism, cohort, and denominator.
- Raw parity counts can change after adjusting for review scores, institute, application topic, or resubmission behavior.
- Award counts do not capture award size, duration, or downstream career effects.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [score-conditioned funding parity](../validations/score_conditioned_funding_parity.md)
- [priority score receipt](priority_score_receipt.md)
- [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md)
- [sequential covariate gap decomposition](../methods/sequential_covariate_gap_decomposition.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `parity_award_shortfall_counterfactual`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: award parity counterfactual; funding shortfall count; expected awards under parity; missing awards estimate
