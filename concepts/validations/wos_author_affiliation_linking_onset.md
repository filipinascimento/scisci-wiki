# WoS author-affiliation linking onset

## Summary

WoS author-affiliation linking onset is the validation caveat that Web of Science Core Collection records index all authors and affiliations, but explicit author-to-affiliation links are reported from 2008 forward.

## Canonical Form

- Unit of analysis: author, affiliation, paper, source collection, publication year, or author-affiliation edge.
- Typical representation: temporal coverage flag, pre/post-2008 sensitivity check, missing-link audit, or source-layer affiliation-link manifest.
- Validation target: avoid treating all historical WoS records as having equivalent person-to-institution linkage quality.
- Empirical signature: author-level affiliation, mobility, and collaboration analyses become more reliable after the onset of author-affiliation linking.

## Uses in Science of Science

- Qualifies [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md), and [institution-name variant normalization](../methods/institution_name_variant_normalization.md).
- Supports temporal robustness checks in mobility, institution-level productivity, collaboration geography, and author-impact studies using WoS records.
- Helps compare WoS author-affiliation coverage with OpenAlex, Dimensions, Scopus, ORCID, and local curated affiliation histories.
- Links source-layer provenance to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for author- and institution-level claims.

## Operationalization

- Record whether a WoS record has explicit author-affiliation links or only paper-level affiliation/address information.
- Run pre/post-2008 checks when author-level institution attribution affects the result.
- Separate institution-level paper counts from author-level affiliation trajectories when historical links are missing or ambiguous.
- Use CVs, ORCID, institutional data, or manually checked samples when older records drive a mobility or institution-level conclusion.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) reports that all authors from all Web of Science Core Collection publications are indexed.
- The same table states that authors are linked to affiliations from 2008 forward.
- Birkle et al. also state that all author affiliations are indexed, while author-affiliation indexing varies by collection on the broader Web of Science platform.
- This makes the 2008 onset a temporal coverage caveat for person-to-institution edges, even when publication-level affiliation text exists before that point.

## Caveats

- The onset caveat does not mean pre-2008 affiliation information is absent; it means author-to-affiliation linkage is not equivalent.
- Multiple affiliations, corresponding-author addresses, and source-layer variation can still complicate post-2008 linkage.
- Treating paper-level addresses as author-level affiliations can inflate mobility or collaboration measures.

## Links

- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_author_affiliation_linking_onset`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: 2008 author affiliation onset; WoS author affiliation links; affiliation-link temporal coverage; pre-2008 WoS affiliation caveat
