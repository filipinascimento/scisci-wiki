# Co-cited core literature

## Summary

Co-cited core literature is the compact set of earlier works that later authors repeatedly cite together, making it a visible reference core for a specialty, method, or research front.

## Canonical Form

- Unit of analysis: specialty, research front, reference cluster, or cited-paper set.
- Typical representation: cluster of highly cited and mutually co-cited papers, core-profile list, or weighted subnetwork.
- Mechanism or measurement target: canon formation and shared intellectual memory within a citing community.
- Empirical signature: a small set of earlier works appears repeatedly in later papers' joint reference lists and forms a dense co-citation cluster.

## Uses in Science of Science

- Turns [co-citation strength](../measures/co_citation_strength.md) edges into interpretable specialty cores.
- Provides a reference-based counterpart to topic-model, keyword, and embedding representations of [research fronts](../mechanisms/research_fronts.md).
- Can be used as a profile for selective dissemination, expert reading, or corpus construction.
- The retrieval version becomes a [co-citation SDI profile](../methods/co_citation_sdi_profile.md).
- The historical Small workflow uses [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md) to construct a candidate core.
- Requires [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md) checks when the recovered core is treated as a specialty boundary.
- Helps trace which papers become obligatory context for later work.

## Operationalization

- Start from highly cited papers, a cycling-derived seed expansion, or a bounded specialty corpus.
- Build a co-citation matrix among candidate cited works, often from [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md).
- Apply thresholds or clustering to identify a dense set of mutually co-cited papers; the visible map may be a [thresholded co-citation network](thresholded_co_citation_network.md).
- Interpret the resulting core through titles, reference contexts, expert review, and longitudinal stability checks.

## Evidence and Validations

- Verified full-text evidence from Small (1973) builds a particle-physics co-citation network from key cited papers and treats the resulting ten-paper network as a probable core of the specialty literature.
- Small explicitly cautions that the ten papers may not represent all frequently cited papers in the specialty, which motivates [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md).
- Small argues that co-citation can establish a cluster or core of earlier literature for a specialty and that this core can function as a profile for that specialty.
- The paper's example uses highly cited papers as entry points, then determines co-citation relationships among all items in the cluster.
- Small's use of highly cited papers as entry points also supports [key-paper concept proxy](key_paper_concept_proxy.md).
- This makes co-cited core literature a representation-level motif: it is not only pairwise similarity, but a compact subgraph of works that later scientists jointly recognize.

## Caveats

- The apparent core depends on entry-point selection, citation-index coverage, thresholding, and time window.
- Canonical cores can exclude peripheral, negative, local-language, or uncited contributions.
- Dense co-citation does not prove agreement among cited works; it may reflect controversy or shared method use.

## Links

- [co-citation](co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md)
- [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [thresholded co-citation network](thresholded_co_citation_network.md)
- [citing-community perceived association](../mechanisms/citing_community_perceived_association.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [key-paper concept proxy](key_paper_concept_proxy.md)
- [co-citation SDI profile](../methods/co_citation_sdi_profile.md)
- [co-citation secondary indexing](../methods/co_citation_secondary_indexing.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](science_maps.md)
- [citation networks](citation_networks.md)
- [reference set construction](../methods/reference_set_construction.md)
- [hidden citations](../measures/hidden_citations.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_cited_core_literature`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation core; specialty reference core; core literature cluster; co-cited canon
