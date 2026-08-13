# Temporal co-citation drift

## Summary

Temporal co-citation drift is the change in co-citation relationships as later scientific communities reinterpret which earlier works belong together.

## Canonical Form

- Unit of analysis: cited-paper pair, co-citation cluster, specialty map, field, or time slice.
- Typical representation: time-sliced co-citation matrix, changing edge weight, cluster split/merge, or longitudinal specialty map.
- Mechanism or measurement target: shifting intellectual associations, changing research interests, and specialty development.
- Empirical signature: the same earlier works gain, lose, or change co-citation ties as new papers cite them in different combinations.

## Uses in Science of Science

- Explains why [co-citation](../representations/co_citation.md) is dynamic while [bibliographic coupling](../representations/bibliographic_coupling.md) is fixed at publication time.
- Treats [citing-community perceived association](citing_community_perceived_association.md) as the mechanism that lets the same pair of earlier works gain, lose, or change meaning across later communities.
- Supports longitudinal [science map update workflows](../methods/science_map_update_workflows.md) and research-front monitoring.
- Supplies the refresh logic for fixed retrieval instruments such as [co-citation SDI profiles](../methods/co_citation_sdi_profile.md).
- Helps identify specialty consolidation, reclassification, revival, or fragmentation.
- Connects citation-network structure to [field emergence and specialty formation](field_emergence.md).

## Operationalization

- Build co-citation matrices in successive publication-year windows.
- Track pairwise [co-citation strength](../measures/co_citation_strength.md), cluster memberships, and map positions across windows.
- Compare observed drift with null models that preserve citation volume, reference age, or field size.
- Interpret large changes with full-text citation contexts, review articles, new methods, or institutional shifts.

## Evidence and Validations

- Verified full-text evidence from Small (1973) states that co-citation patterns can change over time because they depend on the population of later citing authors.
- Small contrasts this with bibliographic coupling, which is fixed because it depends on references already contained in coupled documents.
- Small's interpretation of co-citation as a relationship established by later citing authors gives the mechanism behind this drift.
- The paper argues that changes in co-citation patterns, viewed over years, can help explain mechanisms of specialty development.
- Small also proposes using changing co-citation structure to monitor growth, change, and decline of specialties.

## Caveats

- Apparent drift can reflect database expansion, indexing changes, citation aging, or threshold artifacts.
- Stable edge weights do not imply stable meaning; the reasons for citing a pair can change.
- Drift measures should report time-window length, normalization, and cluster-matching choices.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citing-community perceived association](citing_community_perceived_association.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [research fronts](research_fronts.md)
- [field emergence and specialty formation](field_emergence.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [co-citation SDI profile](../methods/co_citation_sdi_profile.md)
- [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md)
- [citation aging obsolescence](citation_aging_obsolescence.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `temporal_co_citation_drift`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation dynamics; co-citation pattern change; longitudinal co-citation drift; specialty-map drift
