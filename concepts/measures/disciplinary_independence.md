# Disciplinary independence

## Summary

Disciplinary independence measures how much a discipline or journal cluster cites within itself rather than drawing on other clusters.

## Canonical Form

- Unit of analysis: journal cluster, discipline, field, citation flow, or cluster-level self-citation fraction.
- Typical representation: self-citation share, independence score, insularity color scale, or inward/outward dependency profile.
- Measurement target: how self-contained or externally dependent a field is in citation-flow terms.
- Empirical signature: highly independent disciplines cite their own cluster heavily, while interdisciplinary hubs exchange more citations across cluster boundaries.

## Uses in Science of Science

- Adds an interpretable attribute to [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md).
- Links [science maps](../representations/science_maps.md), [interdisciplinarity](../mechanisms/interdisciplinarity.md), and [field classifications](field_classifications.md).
- Helps distinguish visual centrality from citation-flow dependence in map interpretation.

## Operationalization

- Aggregate citation counts from a citing cluster to all cited clusters.
- Define independence as the share of the citing cluster's citations that go to itself.
- Plot independence on a map with color, position, or dependency arrows.
- Compare independence by field, year, database, and cluster granularity.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) defines cluster independence as the cluster-level self-citation fraction: the share of citations from cluster `i` that cite cluster `i`.
- The paper color-codes independence on its journal-cluster backbone and reports that more independent disciplines tend to lie near outer map edges, while less independent or more interdisciplinary disciplines are nearer the center.
- Boyack et al. identify biochemistry as a large interdisciplinary hub that receives more than 7.5% of citations from many other disciplines.
- The same map shows variation across major fields, with social-science disciplines generally more independent than medicine and some natural-science regions.

## Caveats

- Cluster self-citation is not the same as author, journal, or citation-gaming self-citation.
- Independence depends on the clustering solution and threshold used to define a discipline.
- High independence can indicate field coherence, isolation, or classification granularity; interpretation needs context.

## Links

- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [cluster citation-dependency arrows](../representations/cluster_citation_dependency_arrows.md)
- [science maps](../representations/science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [field classifications](field_classifications.md)
- [self-citation rates](self_citation_rates.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `disciplinary_independence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: cluster independence; field insularity; within-cluster citation share; disciplinary self-citation fraction
