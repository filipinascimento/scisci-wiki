# Science-location lookup tables

## Summary

Science-location lookup tables assign new records to positions on an existing science map using source titles, keywords, or other classification keys.

## Canonical Form

- Unit of analysis: new paper, journal, grant, patent, institution, keyword set, source-title lookup, or map node.
- Typical representation: lookup table from cleaned journal names or keywords to map subdisciplines and coordinates.
- Method target: make new datasets overlayable on a fixed science-map reference system.
- Empirical signature: a previously unmapped record receives one or more map positions without recomputing the full base map.

## Uses in Science of Science

- Operationalizes [science map overlays](../representations/science_map_overlays.md) by connecting new portfolios to a base map.
- Extends [field classifications](../measures/field_classifications.md) to new records while preserving the version of the [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md).
- Depends on a documented [science-map source-title spine](../datasets/science_map_source_title_spine.md) and [science map update workflows](science_map_update_workflows.md).
- Can bridge modern OpenAlex or Dimensions records into an older map when source-title or keyword coverage is adequate.

## Operationalization

- Select the base map version and the lookup keys it supports.
- Clean source-title names and keywords in the incoming dataset.
- Match records to source titles, subdiscipline keywords, or other provided map keys.
- Assign each matched record to one or more subdisciplines and inherit the corresponding coordinates and parent discipline.
- Report unmatched records, ambiguous matches, and whether counts are full or fractional.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) states that new data can be "science-located" by assigning it to subsets of the UCSD map's 554 subdisciplines through journal names or keywords.
- The paper reports that journal-name lookup tables are provided for Scopus and WoS data, allowing nearly all records downloaded from those sources to be mapped.
- Borner et al. describe mapped record counts as typical overlay weights, with node size representing the number of records assigned to a subdiscipline.
- The same full text links lookup-based science location to Sci2, VIVO, and SciVal use cases for institutional and expertise overlays.

## Caveats

- Lookup assignment inherits title cleaning, database coverage, and classification-version errors.
- Keyword-based mapping can be less stable than source-title mapping when vocabularies drift or fields use shared terms.
- Newer data sources such as Dimensions and OpenAlex may have better current coverage than the original WoS/Scopus lookup tables, but still require explicit crosswalks.

## Links

- [science map overlays](../representations/science_map_overlays.md)
- [science maps](../representations/science_maps.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [science map update workflows](science_map_update_workflows.md)
- [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md)
- [field classifications](../measures/field_classifications.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_location_lookup_tables`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: science-location lookup; map overlay lookup; journal-name map lookup; science-locating records
