# Annualized overlay node sizing

## Summary

Annualized overlay node sizing scales science-map overlay nodes by the average number of records per year assigned to each subdiscipline over the years a source existed.

## Canonical Form

- Unit of analysis: overlay node, subdiscipline, source title, record count, source lifespan, or annualized count.
- Typical representation: node size proportional to average yearly mapped records.
- Representation target: make overlays comparable when journals or sources enter the database in different years.
- Empirical signature: subdiscipline nodes encode mapped output volume while adjusting for source-title lifespan.

## Uses in Science of Science

- Refines [science map overlays](science_map_overlays.md) with an explicit node-size convention.
- Uses [science-location lookup tables](../methods/science_location_lookup_tables.md) to assign records to map nodes.
- Works with [discipline-subdiscipline map hierarchy](discipline_subdiscipline_map_hierarchy.md) for aggregate overlays.

## Operationalization

- Map records or source titles to subdisciplines.
- Determine the years each source existed or was covered.
- Compute average records per year over the relevant coverage span.
- Encode the annualized count as node size in the overlay.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) states that mapped records are typically depicted by subdiscipline node size.
- The paper specifies that node size corresponds to the average number of papers per year over all years the journal existed between 2001 and 2010.
- This convention supports overlays while accounting for different source-title lifespans.

## Caveats

- Annualization depends on accurate source existence and coverage years.
- Node size can be mistaken for importance rather than mapped volume.
- Different overlay tasks may need fractional counts, raw counts, or impact-weighted sizes instead.

## Links

- [science map overlays](science_map_overlays.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [discipline-subdiscipline map hierarchy](discipline_subdiscipline_map_hierarchy.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [science-map usability study validation](../validations/science_map_usability_study_validation.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `annualized_overlay_node_sizing`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: annualized science-map node size; average yearly overlay sizing; source-lifespan node scaling; overlay volume node sizing
