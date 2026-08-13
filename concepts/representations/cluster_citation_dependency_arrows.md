# Cluster citation-dependency arrows

## Summary

Cluster citation-dependency arrows represent dominant citation flows between journal clusters, with arrow direction indicating which cluster receives citations from another cluster.

## Canonical Form

- Unit of analysis: journal cluster, citing cluster, cited cluster, cluster-level citation share, or directed dependency edge.
- Typical representation: directed cluster-to-cluster map, thresholded citation-flow arrows, dependency graph, or diffusion-of-information overlay.
- Representation target: showing the backbone of knowledge dependencies among disciplines after journals have been clustered.
- Empirical signature: a small subset of cross-cluster citation shares reveals hubs, bridges, and dependencies that tie major fields together.

## Uses in Science of Science

- Adds the directed-flow layer to [journal-cluster science backbones](journal_cluster_science_backbones.md).
- Complements [disciplinary independence](../measures/disciplinary_independence.md), which measures within-cluster citation share rather than between-cluster dependency.
- Supports analyses of interdisciplinary hubs, field dependencies, and knowledge diffusion across a science map.
- Can be used with newer Dimensions or OpenAlex source clusters if citation flows and cluster assignments are documented.

## Operationalization

- Aggregate journal-level citation counts into cluster-to-cluster citation counts.
- Normalize each citing cluster's outgoing citation counts to obtain citation shares by cited cluster.
- Select a threshold for visible dependencies, such as a minimum citing-share value.
- Draw directed arrows from citing clusters to cited clusters, with weight or color encoding the citation-share magnitude.
- Document threshold choice and whether arrows denote citing-to-cited flow or information diffusion from cited-to-citing fields.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) aggregates the IC-Jaccard map into 212 clusters covering 7,000 journals.
- The paper reports 13,502 possible cluster-to-cluster citation shares and shows only the 311 relationships where the citing cluster gives more than 7.5% of its citations to the cited cluster.
- Boyack et al. state that arrow tips point to cited clusters, while arrows denote diffusion of information from cited clusters to citing clusters.
- The map identifies biochemistry as a major interdisciplinary hub because many other disciplines direct strong citation shares to it.

## Caveats

- The dependency threshold is arbitrary and materially changes the visible backbone.
- Citation direction and information-flow interpretation can point in opposite intuitive directions, so arrow semantics must be stated.
- Cluster-level arrows hide paper-level and journal-level heterogeneity.
- High citation dependency can reflect field size, review journals, or multidisciplinary journals, not only intellectual dependence.

## Links

- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [disciplinary independence](../measures/disciplinary_independence.md)
- [journal inter-citation and co-citation matrices](journal_intercitation_cocitation_matrices.md)
- [science maps](science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `cluster_citation_dependency_arrows`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: discipline dependency arrows; cluster citation-flow arrows; science backbone dependency graph; intercluster citation dependency
