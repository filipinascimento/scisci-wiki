# Source-title article-volume decoupling

## Summary

Source-title article-volume decoupling measures whether adding journals or source titles to a bibliographic map changes the number of sources much more than it changes the number of article records.

## Canonical Form

- Unit of analysis: map version, source database, journal set, source-title update, article record set, or coverage stratum.
- Typical representation: added-source share, added-article share, source/article growth ratio, or original-content retention share.
- Measurement target: distinguish source-title coverage expansion from actual article-volume expansion.
- Empirical signature: newly added journals account for a much smaller share of articles than their share of source titles suggests.

## Uses in Science of Science

- Refines [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md) by separating title-count growth from content-volume growth.
- Helps [science map update workflows](../methods/science_map_update_workflows.md) decide whether a map update changes the evidence base or mostly improves long-tail source lookup.
- Protects [science map overlays](../representations/science_map_overlays.md) from interpreting many newly covered small journals as a proportional shift in research output.
- Provides a coverage diagnostic for comparing older SciSciNet-era source lists with fresher Dimensions or OpenAlex venue coverage.

## Operationalization

- Count source titles in the old and new map versions by database and discipline.
- Count article records associated with old and newly added source titles over a common year or window.
- Compute the percentage increase in source titles and the percentage increase in article records.
- Report the share of total article volume still associated with the original map-generation source set.
- Stratify by discipline, language, document type, and source database when coverage changes are uneven.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) reports that adding 7,464 Scopus source titles increased Scopus journal coverage by 47% but increased article volume by only 13%.
- The paper notes that the newly added journals had far fewer articles per journal than journals in the original UCSD map classification system.
- In a later coverage comparison, Borner et al. report that 219,711 of 1,885,278 Scopus records from 2008, or 11.65%, were associated with added titles.
- They conclude that more than 88% of the content associated with the classification system and map still came from the original rigorous mapping process.

## Caveats

- A small article-volume share can still matter for coverage of underrepresented fields, languages, regions, or publication types.
- Source-title and article-volume comparisons depend on the chosen year, database snapshot, and document-type filters.
- Low-volume source additions can improve lookup completeness while having little effect on map geometry.

## Links

- [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [science map overlays](../representations/science_map_overlays.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Scopus](../datasets/scopus.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `source_title_article_volume_decoupling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: source-title article decoupling; journal-count article-count gap; added-title volume check; map coverage volume decoupling
