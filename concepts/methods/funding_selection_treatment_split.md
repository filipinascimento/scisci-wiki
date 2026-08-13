# Funding selection-treatment split

## Summary

Funding selection-treatment split attempts to distinguish whether funding differences arise because funders select different projects or because receiving funding changes project behavior.

## Canonical Form

- Unit of analysis: project, funding model, project-process change, publication, or status group.
- Typical representation: subgroup comparison between projects that followed the initial plan and projects that changed course.
- Mechanism or measurement target: selection into funding versus treatment after funding.
- Empirical signature: funding coefficients differ between process-unchanged and process-changed project subsets.

## Uses in Science of Science

- Refines [funding model status contingency](../mechanisms/funding_model_status_contingency.md) by separating selection and post-award constraint mechanisms.
- Supports audits of [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) when funding systems may be less receptive to novel proposals from low-status applicants.
- Links survey design to causal interpretation when randomized or proposal-level data are unavailable.

## Operationalization

- Ask whether the project proceeded as initially planned.
- Convert the response into a process-changed indicator.
- Estimate funding-novelty models separately for process-unchanged and process-changed projects.
- Interpret the process-unchanged subset as more dominated by selection effects and differences in the process-changed subset as suggestive of treatment effects, while reporting the limitation.
- Carry the same status definition through both subsets, such as [respondent-author status proxy](respondent_author_status_proxy.md), so selection and treatment comparisons are not mixed with changing status definitions.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) uses a survey item about whether the project proceeded as initially planned to split the sample.
- Their interpretation is that unchanged projects better approximate selection effects, while changed projects may also reflect the treatment of receiving competitive funds.
- The paper reports evidence of positive selection for high-status researchers and negative selection for low-status researchers.
- For junior researchers, Wang et al. report evidence consistent with both selection bias and an additional negative treatment effect under competitive funding.

## Caveats

- Process change is an imperfect proxy for treatment; unchanged projects can still be affected by funding and changed projects can still be selected.
- The method cannot observe rejected proposals or all self-screened project ideas.
- Strong causal claims require proposal-level data, assignment discontinuities, lotteries, or natural experiments.

## Links

- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [status conformity pressure](../mechanisms/status_conformity_pressure.md)
- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [respondent-author status proxy](respondent_author_status_proxy.md)
- [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [block-funding novelty buffer](../mechanisms/block_funding_novelty_buffer.md)
- [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `funding_selection_treatment_split`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Aliases: funding selection versus treatment; process-change split; project course-change design; post-award treatment split
