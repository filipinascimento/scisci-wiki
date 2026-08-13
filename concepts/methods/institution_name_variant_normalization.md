# Institution-name variant normalization

## Summary

Institution-name variant normalization maps affiliation name variants, parent-child relationships, and institutional aliases to preferred organization names for analysis.

## Canonical Form

- Unit of analysis: affiliation string, institution, organization hierarchy, publication address, author-affiliation link, or normalized organization ID.
- Typical representation: preferred-name mapping, institution hierarchy, address-normalization table, variant dictionary, or organization disambiguation pipeline.
- Method target: convert noisy affiliation text into comparable institution-level entities.
- Empirical signature: multiple spelling variants, subsidiary units, campuses, and parent organizations collapse to a curated preferred institutional name.

## Uses in Science of Science

- Supports [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) and [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md).
- Needs source-specific temporal coverage checks such as [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md) before normalized institutions are treated as person-to-institution edges.
- Adds a curated-source counterpart to [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md) and [GRID affiliation mapping](grid_affiliation_mapping.md).
- Enables institution-level [citation impact indicators](../measures/citation_impact_indicators.md), mobility studies, and collaboration-geography analyses.
- Provides a data-quality layer for [Web of Science](../datasets/web_of_science.md), [Dimensions](../datasets/dimensions.md), and other scholarly indexes.

## Operationalization

- Parse author affiliation strings and institution addresses from source records.
- Cluster spelling variants, organizational aliases, parent-child relationships, and campus names.
- Map variants to a preferred institutional name or persistent organization identifier.
- Preserve original strings, normalized names, hierarchy links, and normalization provenance.
- Audit changes over time when institutions merge, rename, split, or reorganize.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that all author affiliations are indexed in Web of Science Core Collection.
- The paper reports that institution variants and parent-child relationships are mapped to a preferred institutional name through a manually curated process.
- Birkle et al. describe this institutional mapping as increasingly global in coverage, making it an explicit data curation layer rather than raw address text.
- The same table notes that author affiliation indexing varies by collection on the broader Web of Science platform, so normalization must be source-layer aware.
- Birkle et al. also report that explicit author-affiliation links in Core Collection are available from 2008 forward, separating institution-name normalization from historical author-link coverage.

## Caveats

- Preferred institutional names can hide subunit-level variation that matters for some analyses.
- Manual curation improves precision but can be uneven across regions, languages, and institutional histories.
- Institution-normalization snapshots should be versioned because names and hierarchies change.

## Links

- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md)
- [GRID affiliation mapping](grid_affiliation_mapping.md)
- [geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `institution_name_variant_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: institutional affiliation normalization; preferred institution name mapping; organization-name disambiguation; affiliation variant mapping
