# Between-school collaboration field-universality check

## Summary

Between-school collaboration field-universality check tests whether growth in cross-university collaboration is broad across fields rather than driven by a few collaboration-intensive specialties.

## Canonical Form

- Unit of analysis: field, subfield, domain, time period, or field-year cell.
- Typical representation: count or share of fields with increasing between-school collaboration, optionally split by broad domain.
- Validation target: whether a collaboration trend is field-general or concentrated in selected domains.
- Empirical signature: most fields show positive changes in between-school collaboration share between early and late periods.

## Uses in Science of Science

- Validates [between-school collaboration share](../measures/between_school_collaboration_share.md) as a broad trend rather than a compositional artifact.
- Tests whether [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md) results are robust to field heterogeneity.
- Helps compare collaboration growth across domains with different authorship norms and data coverage.
- Provides a field-level complement to mechanisms such as [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md).

## Operationalization

- Compute between-school collaboration share separately for each field or subfield in early and late periods.
- Count fields with positive, zero, or negative change, and report the denominator used for each domain.
- Preserve field definitions, field coverage, and publication-count thresholds so small fields do not dominate the interpretation.
- Where possible, compare raw field counts with publication-weighted summaries and regression models with field fixed effects.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) reports that 168 of 172 science and engineering fields increased between-school collaboration.
- The same source reports increases in all 54 social-science fields and in 18 of 27 arts and humanities fields.
- These counts support the claim that cross-university collaboration growth was not simply a shift toward a few high-collaboration fields.
- The arts and humanities result also shows the value of reporting domain-specific denominators, because the trend is weaker where team authorship is less common.

## Caveats

- Field taxonomies can change over time and may differ across databases.
- Small fields can produce unstable early-versus-late comparisons.
- Field universality does not imply that the magnitude, causes, or consequences of collaboration growth are identical across fields.
- Address completeness and authorship conventions can vary strongly by field.

## Links

- [between-school collaboration share](../measures/between_school_collaboration_share.md)
- [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md)
- [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [Web of Science](../datasets/web_of_science.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `between_school_collaboration_field_universality`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: field-universal collaboration growth; subfield collaboration increase check; between-school field robustness; cross-university trend breadth
