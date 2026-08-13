# Lead/support role prediction validation

## Summary

Lead/support role prediction validation checks whether a model can infer team roles and paper-level L-ratio for papers without explicit contribution statements.

## Canonical Form

- Unit of analysis: author-paper role label, paper L-ratio, contribution-statement paper, or held-out validation set.
- Typical representation: precision, recall, predicted-versus-observed L-ratio correlation, calibration plot, or by-team-size validation curve.
- Validation target: extrapolation from observed contribution statements to a broader publication corpus.
- Empirical signature: predicted roles recover observed lead/support labels and predicted L-ratio tracks empirical L-ratio.

## Uses in Science of Science

- Validates [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Supports scaling [lead-role ratio](../measures/lead_role_ratio.md) from [author contribution statements](../datasets/author_contribution_statements.md) to [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md).
- Provides a reliability check before testing [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md) at corpus scale.
- Pairs with [contribution-statement role coverage caveat](contribution_statement_role_coverage_caveat.md), because predictive accuracy on observed statements does not by itself prove source representativeness.

## Operationalization

- Split observed contribution-statement data into training and validation sets.
- Predict lead/support labels using contribution-derived roles and bibliometric/career features.
- Evaluate role classification with precision and recall.
- Predict paper-level L-ratio and compare predicted to empirical values with correlation and calibration diagnostics.
- Audit performance by journal, year, field, author order, and team size.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) builds a neural network to predict Lead and Support roles for papers without explicit author contribution statements.
- The full text reports precision of 0.79 and recall of 0.793 for classifying author roles.
- Xu et al. extend the model with team size and contribution unevenness to predict L-ratio, reporting Pearson correlation 0.66 between predicted and empirical L-ratios.
- The prediction workflow is used to scale L-ratio estimates to 16,397,750 papers.

## Caveats

- Good aggregate prediction does not guarantee unbiased role estimates for all fields, journals, genders, countries, or author-order conventions.
- Validation on four journals may not generalize to fields where contribution statements are unavailable or differently structured.
- L-ratio correlation can be high while still producing biased tail estimates.
- Domain-shift audits are needed when applying the classifier to older papers, nontraining journals, or fields with different author-order norms.

## Links

- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md)
- [contribution-statement role coverage caveat](contribution_statement_role_coverage_caveat.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [same-size team hierarchy contrast](same_size_team_hierarchy_contrast.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `lead_support_role_prediction_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: lead support classifier validation; L-ratio prediction validation; role imputation validation; contribution role model validation
