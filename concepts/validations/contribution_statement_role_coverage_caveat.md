# Contribution-statement role coverage caveat

## Summary

Contribution-statement role coverage caveat is the validation concern that role-aware team-science analyses are trained on journals, years, fields, and statement formats where author contribution statements exist, then extrapolated to a much larger corpus where roles are unobserved.

## Canonical Form

- Unit of analysis: contribution-statement journal, author-paper row, role classifier, extrapolated publication corpus, field, or time period.
- Typical representation: training-source inventory, statement-coverage table, out-of-domain validation, field-year coverage map, or role-prediction bias audit.
- Validation target: whether observed role statements are representative enough to support role inference in papers without statements.
- Empirical signature: contribution statements come from a narrow subset of journals and years, while role estimates are applied to a much broader publication database.

## Uses in Science of Science

- Qualifies [author contribution statements](../datasets/author_contribution_statements.md) as a data source for [lead-role ratio](../measures/lead_role_ratio.md).
- Provides a source-coverage guardrail for [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md) and [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Complements [lead/support role prediction validation](lead_support_role_prediction_validation.md), which tests predictive accuracy but not all domain-shift risks.
- Links role-aware team science to broader database caveats such as [collaboration source coverage bias](collaboration_source_coverage_bias.md).

## Operationalization

- Record which journals, years, fields, and contribution-statement templates supply training data.
- Compare training-source distributions with the target publication corpus by field, year, team size, country, journal, and author-order convention.
- Evaluate role predictions on held-out sources whenever additional statement data become available.
- Report uncertainty or avoid extrapolation in domains far from the training corpus.
- Audit whether role labels reproduce journal-specific statement templates rather than general contribution structure.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) uses contribution statements from PNAS, Nature, Science, and PLOS ONE to train and validate role inference.
- The same full text reports source windows of 2003-2015 for PNAS, 2006-2020 for Nature, 2018-2020 for Science, and 2006-2014 for PLOS ONE.
- Xu et al. then scale role and L-ratio estimates to 16,397,750 multi-author papers, making representativeness and domain shift important validation issues.
- The paper reports classifier accuracy and L-ratio correlation, but broader field, journal, and era coverage remain necessary caveats for reuse.

## Caveats

- This caveat does not invalidate role-aware analysis; it defines what must be checked before treating imputed roles as general.
- Contribution-statement policies and vocabularies change over time.
- MAG is historical and no longer updated, so current role-aware studies should refresh the publication spine with newer sources when possible.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [lead/support role prediction validation](lead_support_role_prediction_validation.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [contribution-statement role-granularity limit](contribution_statement_role_granularity_limit.md)
- [collaboration source coverage bias](collaboration_source_coverage_bias.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `contribution_statement_role_coverage_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: role-statement coverage caveat; contribution-statement domain shift; role-imputation coverage bias; contribution-statement source coverage
