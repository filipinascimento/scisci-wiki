# Contribution-unevenness L-ratio predictor

## Summary

Paper-level L-ratio can be predicted from team size plus within-team contribution unevenness inferred from contribution statements and bibliometric features.

## Canonical Form

- Unit of analysis: paper, author, team size, contribution role, L-ratio, or contribution-statement source.
- Typical representation: feature set combining team-size and contribution-unevenness predictors.
- Mechanism, measurement, or validation target: prediction of team flatness from observed and inferred contribution signals.
- Empirical signature: predicted L-ratio tracks observed contribution-statement L-ratio better when unevenness features are included.

## Uses in Science of Science

- Refines team-flatness prediction by linking it to [lead role ratio](../measures/lead_role_ratio.md) and [contributorship prediction models](contributorship_prediction_models.md).
- Useful as a reusable check when [lead support role prediction validation](../validations/lead_support_role_prediction_validation.md) is used in science-of-science inference.
- Creates cross-links to [contribution role vectors](../representations/contribution_role_vectors.md) so the motif is not interpreted in isolation.

## Operationalization

- Compute author contribution intensities or role probabilities for each team member.
- Summarize within-team unevenness with entropy, Gini, max-share, or related dispersion features.
- Combine unevenness and team size in an L-ratio prediction model and validate against observed contribution statements.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) extends the role model with team size and contribution unevenness and reports a predicted-observed L-ratio correlation of 0.66.
- The predictor operationalizes team hierarchy as a paper-level feature rather than only an observed statement outcome.

## Caveats

- The verified text does not specify every unevenness formula.
- Prediction quality depends on contribution-statement coverage and role-label consistency.

## Links

- [Lead-role ratio](../measures/lead_role_ratio.md)
- [Contributorship prediction models](contributorship_prediction_models.md)
- [Lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)
- [Contribution role vectors](../representations/contribution_role_vectors.md)
- [Contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md)
- [Bibliometric contributorship predictor set](../representations/bibliometric_contributorship_predictor_set.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `contribution_unevenness_l_ratio_predictor`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: contribution inequality predictor; role unevenness feature; L-ratio contribution dispersion
