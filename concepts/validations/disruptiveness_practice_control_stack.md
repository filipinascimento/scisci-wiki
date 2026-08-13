# Disruptiveness practice-control stack

## Summary

Disruptiveness practice-control stack is a robustness design that checks whether a disruption-score trend remains after accounting for changing publication volume, reference-list length, authorship size, field growth, and citation practices.

## Canonical Form

- Unit of analysis: paper, patent, field-year, technology-year, disruption score, or regression prediction.
- Typical representation: normalized CD-index variants, regression-control panels, predicted trend curves, or robustness table.
- Validation target: distinguish real changes in citation-network redirection from artifacts of changing scholarly and patenting practices.
- Empirical signature: adjusted indicators and controlled models preserve the main disruptiveness trend.

## Uses in Science of Science

- Provides a structured robustness companion to [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md).
- Supports [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) before mechanism claims such as [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Complements [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md), which attributes variance to field, year, and person effects.
- Gives [disruption measure validation](disruption_measure_validation.md) a reusable practice-confound checklist.

## Operationalization

- Recompute normalized disruption indicators that account for increased reference-list length or citing behavior.
- Fit regression models with publication-year indicators and field-year controls for output volume, average references, and average authors or inventors.
- Include focal-work controls such as number of cited papers or patents.
- Compare adjusted predictions with unadjusted disruption trends.
- Pair regression controls with rewired citation-network nulls when citation degree and citation-age structure are central concerns.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) states that disruptiveness declines are not attributable to changing publication, citation, or authorship practices.
- The paper computes normalized CD-index variants that adjust for the increasing tendency of papers and patents to cite previous work.
- Park et al. estimate regression models with publication-year indicators, field-year controls for new output, mean cited work, and mean authors or inventors, plus paper- or patent-level controls for cited-work counts.
- Their predicted trends remain consistent with the main decline, and Monte Carlo rewiring provides a separate citation-network null check.

## Caveats

- Control stacks can adjust away part of the mechanism if changing practices are themselves consequences of deeper system shifts.
- Regression controls do not eliminate unmeasured changes in field boundaries, document types, review norms, or database coverage.
- Normalized CD-index variants need transparent definitions because different normalizations can answer different questions.
- Practice controls should be reported alongside source-specific replication and high-quality subset checks.

## Links

- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md)
- [disruption measure validation](disruption_measure_validation.md)
- [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [reference-list length growth confound](reference_list_length_growth_confound.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [field classifications](../measures/field_classifications.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruptiveness_practice_control_stack`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: disruption practice controls; CD5 publication citation authorship controls; disruption confound control stack; citation-practice disruption robustness
