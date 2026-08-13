# Science-map coverage expansion audit

## Summary

Science-map coverage expansion audit checks how a map update changes source-title, article, discipline, and subdiscipline coverage before the updated map is used for comparison.

## Canonical Form

- Unit of analysis: map version, database source list, source title, article count, discipline, subdiscipline, or coverage stratum.
- Typical representation: before/after coverage table, added-source count, discipline coverage growth, coefficient of variation, or unmapped-record report.
- Validation target: whether apparent map change reflects scientific structure or changed database coverage.
- Empirical signature: update reports quantify newly covered titles and how their distribution changes map balance.

## Uses in Science of Science

- Makes [science map update workflows](../methods/science_map_update_workflows.md) auditable.
- Protects [science map overlays](../representations/science_map_overlays.md) and [field classifications](../measures/field_classifications.md) from unreported coverage drift.
- Complements [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for map-based analyses.
- Helps compare older SciSciNet-derived map layers against fresher Dimensions or OpenAlex coverage.

## Operationalization

- Record source-title and article counts for each map version and source database.
- Compare coverage by discipline, subdiscipline, field, document type, language, country, and source age where possible.
- Separate newly added source titles from newly added article volume.
- Use [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md) when title coverage grows much faster than article coverage.
- Compute distributional balance measures such as coefficient of variation across subdisciplines.
- Publish unmatched or excluded records so overlays can report their denominator loss.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) compares the 5-year and 10-year UCSD map versions by WoS, Scopus, and combined source-title coverage.
- The paper reports 9,409 additional combined WoS/Scopus journals, with WoS rising from 9,499 to 13,520 titles and Scopus from 14,789 to 22,253 titles.
- Borner et al. show that source-title growth is uneven across broad areas, with especially large relative increases in social sciences and humanities.
- The paper also reports that added Scopus titles account for a much smaller share of 2008 article records than of source titles, and that the 10-year map has a lower coefficient of variation across subdiscipline journal counts.
- The title-count versus article-count portion of this audit is split out as [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md).

## Caveats

- More source titles do not necessarily mean proportional growth in articles, citations, or analytical coverage.
- Coverage expansion can improve representativeness while breaking longitudinal comparability.
- A map can show better balance by source-title counts while still underrepresenting books, conferences, regional journals, or non-English scholarship.

## Links

- [science map update workflows](../methods/science_map_update_workflows.md)
- [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md)
- [map-update structure preservation constraint](map_update_structure_preservation_constraint.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_map_coverage_expansion_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: map coverage audit; source-title coverage expansion; map update denominator audit; science-map coverage drift
