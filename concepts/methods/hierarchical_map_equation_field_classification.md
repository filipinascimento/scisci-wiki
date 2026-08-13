# Hierarchical map-equation field classification

## Summary

Hierarchical map-equation field classification uses random-walk community detection on a citation network to assign papers to nested fields, subfields, and research topics.

## Canonical Form

- Unit of analysis: paper, citation edge, field, subfield, research topic, or hierarchy level.
- Typical representation: nested community labels from a map-equation or InfoMap partition of a paper-level citation network.
- Method target: recover field structure from citation flows rather than relying only on journals or manually assigned categories.
- Empirical signature: papers linked by dense citation trails are grouped into fields and subfields, with manually interpretable labels attached after clustering.

## Uses in Science of Science

- Specializes [field classifications](../measures/field_classifications.md) for paper-level citation networks with hierarchical structure.
- Provides the field and subfield layer used to compare [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) across disciplines.
- Connects the [JSTOR network dataset](../datasets/jstor_network_dataset.md) to [publication-level field classification](publication_level_field_classification.md), [citation networks](../representations/citation_networks.md), and [map-equation knowledge clusters](map_equation_knowledge_clusters.md).
- Supports field-stratified validation when self-citation rates differ by discipline.

## Operationalization

- Build a paper-level citation network from a corpus such as JSTOR.
- Run a hierarchical map-equation or InfoMap algorithm using a random-walk objective.
- Name large fields, subfields, and research topics by inspecting central or highly cited papers in each cluster.
- Attach the resulting hierarchy to papers before estimating field-specific self-citation, gender, or evaluation metrics.
- Report the citation network, random-walk variant, hierarchy levels, labeling procedure, and coverage limits.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) states that a prior analysis used the hierarchical map equation to create a nested hierarchy of all papers in the JSTOR network dataset.
- King et al. use this hierarchy to identify academic fields, subfields, and research topics for field-stratified self-citation analysis.
- The paper describes the method as compressing citation-network random walks and assigning area codes where the walker spends extra time within a group of papers.
- King et al. state that the open-source code for this method is InfoMap and that their implementation used article-level Eigenfactor as the underlying random-walk process.

## Caveats

- Citation-based field structure depends on corpus coverage and reference extraction.
- Manual naming of clusters can introduce interpretation choices even when the partition is algorithmic.
- Hierarchies can change with network vintage, edge weighting, and random-walk specification.
- Field labels inferred from JSTOR may not transfer directly to current OpenAlex or Dimensions field schemes.

## Links

- [field classifications](../measures/field_classifications.md)
- [publication-level field classification](publication_level_field_classification.md)
- [map-equation knowledge clusters](map_equation_knowledge_clusters.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [citation networks](../representations/citation_networks.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [article-level Eigenfactor field random walks](../representations/article_level_eigenfactor_field_random_walks.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `hierarchical_map_equation_field_classification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: InfoMap field classification; hierarchical map equation fields; citation-network field hierarchy; random-walk field classification
