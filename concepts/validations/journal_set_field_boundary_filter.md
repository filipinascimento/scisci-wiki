# Journal-set field-boundary filter

## Summary

Journal-set field-boundary filter is the validation rule of restricting a scientific collaboration panel to recognized journals with appropriate subject categories and enough records, so inferred field-level team structures are not driven by off-field, tiny, or overly specialized venues.

## Canonical Form

- Unit of analysis: journal, field panel, subject category, publication corpus, collaboration network, or performance-stratified venue set.
- Typical representation: journal-inclusion criteria, subject-category fit, minimum paper count, excluded-specialty list, or field-boundary audit.
- Validation target: ensure that journal-defined collaboration panels are broad and stable enough for field-level team-assembly inference.
- Empirical signature: selected journals share the target field category and have enough papers to support reliable team-sequence and network estimates.

## Uses in Science of Science

- Adds a corpus-boundary validation to [creative team assembly panels](../datasets/creative_team_assembly_panels.md).
- Supports [team assembly performance gradient](team_assembly_performance_gradient.md) by making journal-level comparisons more interpretable.
- Connects team-assembly work to broader [field classification sensitivity](field_classification_sensitivity.md) and [WoS subject category fractionalization](wos_subject_category_fractionalization.md) concerns.
- Helps audit whether [team self-assembly models](../methods/team_self_assembly_models.md) are fit to comparable field panels.

## Operationalization

- Define the target discipline and source database.
- Include journals whose main subject category matches the desired field.
- Exclude overly specialized journals when the intended panel is a broad field rather than a narrow subfield.
- Apply a minimum publication-count threshold so network measures are not dominated by sparse venues.
- Record the selected journal list, excluded journals, subject-category source, and time period.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) states that scientific publication data were obtained from Web of Science and selected recognized journals within social psychology, economics, ecology, and astronomy.
- In a note, the paper requires that a journal's main subject category be the desired one, giving ecology examples based on ISI Journal Citation Reports categories.
- Guimera et al. disregard more specialized journals when they do not match the broad target category.
- The paper also requires selected journals to contain a sufficiently large number of papers, typically more than 1000, before inclusion in the analysis.

## Caveats

- Journal-based field boundaries can miss relevant work in interdisciplinary, regional, conference, or emerging venues.
- Broad field filters can hide subfield heterogeneity and institution-specific collaboration modes.
- Minimum-count thresholds improve stability but can remove new or specialized venues.
- Subject-category systems change over time and can assign journals to multiple categories.

## Links

- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [team assembly performance gradient](team_assembly_performance_gradient.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [field classification sensitivity](field_classification_sensitivity.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [journal category specificity audit](journal_category_specificity_audit.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; SciSciNet: W2150443611; WoS: unknown]

## Metadata

- Concept ID: `journal_set_field_boundary_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: journal-panel field filter; recognized-journal inclusion rule; journal-set boundary audit; field journal selection filter
