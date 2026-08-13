# Gender-author-role citation heatmap

## Summary

Gender-author-role citation heatmap represents normalized citation impact by inferred author gender, author position, collaboration type, country, or field.

## Canonical Form

- Unit of analysis: paper, author-position category, inferred gender, collaboration type, country, field, or citation-window cell.
- Typical representation: heatmap, matrix, faceted table, or role-by-gender citation panel.
- Representation target: expose where citation gaps concentrate across gendered authorship roles and collaboration modes.
- Empirical signature: female and male key-author categories differ in field-normalized citation impact across comparable cells.

## Uses in Science of Science

- Visualizes [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md) across multiple conditioning dimensions.
- Pairs [gendered author-position gap](../measures/gendered_author_position_gap.md) with [field-normalized citation impact](../measures/field_normalized_citation_impact.md).
- Helps diagnose whether citation differences align with [gendered collaboration rate](../measures/gendered_collaboration_rate.md) and collaboration type.
- Provides an evaluation-facing representation for [citation-evaluation disparity feedback](../mechanisms/citation_evaluation_disparity_feedback.md).

## Operationalization

- Infer gender for authorships and classify author positions such as sole, first, and last author.
- Classify collaboration mode, typically single-authored, national collaboration, or international collaboration.
- Count citations to a fixed census date and normalize by field or specialty and publication year.
- Aggregate normalized citation impact by gender, role, collaboration type, country, and field as needed.
- Display missing or unassigned gender cells explicitly rather than folding them into male or female categories.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) compares citation impact for papers with women and men in dominant author positions.
- The paper reports lower average relative citations for papers with women in key author positions across single-authored, national-collaboration, and international-collaboration settings.
- Its supplementary heatmap-style display normalizes citation counts by specialty and year, making author-role citation gaps comparable across fields and publication years.
- The representation links gendered output shares, author order, collaboration portfolios, and citation-based evaluation risk in one diagnostic surface.

## Caveats

- Heatmaps can imply precision in sparse cells; include denominators and uncertainty where possible.
- Author order conventions vary by field and can weaken first-author or last-author interpretation.
- Citation gaps can reflect seniority, field mix, collaboration access, self-citation, topic allocation, or evaluation bias.
- Binary inferred-gender categories should be treated as limited proxies, not complete demographic measurement.

## Links

- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [gendered author-position gap](../measures/gendered_author_position_gap.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation window selection](../methods/citation_window_selection.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [citation-evaluation disparity feedback](../mechanisms/citation_evaluation_disparity_feedback.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `gender_author_role_citation_heatmap`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: author-role citation heatmap; gendered citation-impact matrix; gender-position citation panel; collaboration-role citation heatmap
