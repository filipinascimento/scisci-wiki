# Faculty hiring network union aggregation

## Summary

Faculty hiring network union aggregation combines field-level placement edges into domain or system-level hiring networks by taking the union of constituent edges instead of summing field counts that may duplicate multi-field faculty.

## Canonical Form

- Unit of analysis: field-level hiring edge, domain-level edge, faculty member, institution pair, self-loop, or aggregation level.
- Typical representation: unioned edge list, deduplicated institution-pair flow matrix, domain network, or all-academia faculty hiring graph.
- Method target: build larger-scale faculty hiring networks without double-counting faculty who belong to multiple fields.
- Empirical signature: domain or academia-level edge counts differ from a naive sum of field-level edges when faculty are rostered in multiple fields.

## Uses in Science of Science

- Extends [faculty hiring networks](../representations/faculty_hiring_networks.md) from field-specific labor markets to domains and the full professoriate.
- Operationalizes aggregation rules after [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md).
- Supports comparable [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md), [faculty production inequality](../measures/faculty_production_inequality.md), and [core-periphery faculty exchange](../representations/core_periphery_faculty_exchange.md) across scales.
- Prevents artificial inflation of [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md) and placement flows in interdisciplinary departments.

## Operationalization

- Construct field-level directed edges from doctoral university to employing university.
- Preserve self-loops when self-hiring is an analysis target.
- Assign each edge a faculty identifier or stable appointment identifier before aggregation.
- For each domain or larger aggregation, take the union of constituent field edges keyed by faculty and institution pair.
- Recompute edge weights, production counts, hiring counts, self-loop counts, and hierarchy statistics after deduplication.
- Compare unioned results with naive summed results as a sensitivity check when multi-field membership is common.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) constructs faculty hiring networks for each of 107 fields, eight domains, and academia overall.
- The paper represents each placement as a directed edge from doctoral university to employing university and treats self-hires as self-loops.
- When aggregating field-level hiring into domain or academia networks, Wapman et al. take the union of constituent fields' edges.
- The paper states that this union rule avoids double-counting faculty rostered in multiple fields.
- This aggregation is necessary because 23 percent of faculty receive multiple field labels in the underlying faculty roster panel.

## Caveats

- Union aggregation preserves unique faculty transitions but can hide the fact that a placement is relevant to several fields.
- Deduplication requires stable faculty identifiers; name-only matching can introduce merge or split errors.
- Field-level and domain-level networks answer different questions, so results should not be interpreted as simple scaled versions of one another.
- If analysis targets field exposure rather than unique people, fractional or full-count alternatives may be appropriate and should be reported.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty production scale amplification](../validations/faculty_production_scale_amplification.md)
- [core-periphery faculty exchange](../representations/core_periphery_faculty_exchange.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [field classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_hiring_network_union_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: unioned faculty hiring network; deduplicated domain hiring graph; faculty placement edge union; multi-field network aggregation
