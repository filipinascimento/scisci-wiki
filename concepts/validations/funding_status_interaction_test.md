# Funding status-interaction test

## Summary

Funding status-interaction tests examine whether the association between funding model and research novelty differs across researcher-status groups.

## Canonical Form

- Unit of analysis: publication, project, respondent author, funding model, or status category.
- Typical representation: interaction terms between competitive funding and junior status, gender, institutional prestige, or other status proxies.
- Validation target: whether average funding effects hide unequal consequences for lower-status scientists.
- Empirical signature: competitive funding has different novelty coefficients for high-status and low-status groups.

## Uses in Science of Science

- Provides the main validation layer for [funding model status contingency](../mechanisms/funding_model_status_contingency.md).
- Connects funding-policy studies to [gender and race stratification](../mechanisms/gender_race_stratification.md), [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md), and [novelty penalty](../mechanisms/novelty_penalty.md).
- Warns against evaluating funding reforms only by average productivity or average novelty.

## Operationalization

- Build a project-level funding indicator such as [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md).
- Construct status proxies such as assistant professor versus senior rank, female versus male respondent, or peripheral versus core institution.
- Regress paper-level novelty on funding model, status variables, funding-by-status interactions, and controls.
- Visualize predicted novelty by funding model and status group, and test continuous funding-share variants.
- Use [funding definition sensitivity](funding_definition_sensitivity.md) and [type-error asymmetric policy inference](type_error_asymmetric_policy_inference.md) when interaction evidence is consistent but subgroup power is limited.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) estimates novelty models with interactions between competitive funding and three low-status proxies: junior rank, female respondent, and non-core university.
- The paper reports negative interaction coefficients for low-status groups, with the junior and female interactions significant in the main specification.
- Wang et al. note that low-status indicators are not generally correlated with novelty in baseline models, so the key result is the interaction with funding model rather than a simple status main effect.
- Their robustness checks use the ratio of competitive funds and alternative funding definitions, with broadly similar results.

## Caveats

- Status proxies can conflate career stage, gender, institution, reputation, resources, and local autonomy.
- Interaction tests are sensitive to sample size, especially for underrepresented groups.
- The design cannot fully separate whether low-status scientists self-screen proposals or reviewers select their novel proposals differently.

## Links

- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [status conformity pressure](../mechanisms/status_conformity_pressure.md)
- [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [funding definition sensitivity](funding_definition_sensitivity.md)
- [type-error asymmetric policy inference](type_error_asymmetric_policy_inference.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [respondent-author status proxy](../methods/respondent_author_status_proxy.md)
- [funding selection-treatment split](../methods/funding_selection_treatment_split.md)
- [block-funding novelty buffer](../mechanisms/block_funding_novelty_buffer.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `funding_status_interaction_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Aliases: funding by status interaction; status-contingency regression; competitive funding subgroup test; funding equity interaction
