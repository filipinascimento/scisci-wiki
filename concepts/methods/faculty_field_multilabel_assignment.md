# Faculty field-multilabel assignment

## Summary

Faculty field-multilabel assignment records faculty or departments in all relevant fields instead of forcing every appointment into a single disciplinary label.

## Canonical Form

- Unit of analysis: faculty member, department, field label, domain label, appointment, or individual-field pair.
- Typical representation: multi-hot field vector, individual-discipline pair table, primary-appointment flag, or field-domain taxonomy.
- Method target: preserve interdisciplinary departmental membership while controlling double-counting in field and domain analyses.
- Empirical signature: a nontrivial share of faculty or departments receive multiple field labels, requiring explicit counting rules.

## Uses in Science of Science

- Makes the field-assignment rules inside a [faculty roster panel](../datasets/faculty_roster_panel.md) auditable.
- Supports [faculty hiring networks](../representations/faculty_hiring_networks.md) when departments span multiple fields.
- Complements [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md) and [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md) for workforce rather than publication data.
- Provides a bridge to [interdisciplinarity](../mechanisms/interdisciplinarity.md) by allowing departments such as Physics and Astronomy to contribute to both field analyses.
- Feeds [faculty hiring network union aggregation](faculty_hiring_network_union_aggregation.md) when field-level networks are combined into domains.

## Operationalization

- Define a two-level or multi-level taxonomy of fields and domains.
- Annotate departments with all fields that substantively apply rather than one forced label.
- Use an individual-field or appointment-field table as the analysis unit for field-level analyses.
- Restrict multi-department faculty to primary appointments when estimating field/domain networks, unless secondary appointments are substantively required.
- Document whether counts are full-counted, fractionally counted, or unioned at larger aggregation scales.
- Keep excluded small or insufficiently self-contained fields visible in the data dictionary.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) organizes departments into 107 fields and eight domains, with field labels hand-checked.
- The paper states that field labels are not mutually exclusive and that 23 percent of faculty are assigned to multiple fields.
- Wapman et al. intentionally include departments such as Physics and Astronomy in both field analyses because their faculty are relevant to both fields.
- The paper describes the basic data unit as the individual-discipline pair, while noting that individual-level field labels would be preferable if available.
- Wapman et al. restrict field- and domain-level analyses to primary appointments to control double-counting from multiple departmental appointments.

## Caveats

- Full counting across fields can inflate totals if results are aggregated without a union or fractional rule.
- Department-level labels are imperfect proxies for individual specialization.
- Primary-appointment heuristics can miss genuinely joint or interdisciplinary faculty roles.
- Field-domain mappings can embed local institutional taxonomies and may not transfer cleanly across countries or datasets.

## Links

- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty hiring network union aggregation](faculty_hiring_network_union_aggregation.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [field classification sensitivity](../validations/field_classification_sensitivity.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_field_multilabel_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty multi-field assignment; individual-discipline pair; department field multilabeling; primary-appointment field assignment
