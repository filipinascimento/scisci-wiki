# Cited work diversity

## Summary

Cited work diversity measures how broadly a paper, patent, field, or cohort draws on distinct areas of prior work in its references.

## Canonical Form

- Unit of analysis: focal work, reference list, predecessor patent set, field-year, technology-category-year, or cited-work distribution.
- Typical representation: diversity index, entropy, Rao-Stirling diversity, category spread, or diversity trend among cited works.
- Measurement target: breadth of prior knowledge use.
- Empirical signature: lower diversity of references or predecessor patents accompanies narrower knowledge use and lower disruption.

## Uses in Science of Science

- Operationalizes the central evidence layer of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Complements [reference-age search depth](reference_age_search_depth.md) and [reference-popularity search](reference_popularity_search.md) by measuring breadth rather than age or popularity.
- Complements [citation breadth via distinct cited sources](citation_breadth_distinct_sources.md), which counts unique cited articles or journals before applying diversity weights.
- Connects reference-set structure to [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) and [novelty and conventionality](../mechanisms/novelty_conventionality.md).
- Can be implemented with field categories, topic embeddings, citation-network communities, or patent technology classes.

## Operationalization

- Construct the reference or predecessor-patent set for each focal item or field-year.
- Assign cited works to fields, topics, clusters, or embedding neighborhoods.
- Compute a diversity statistic over the cited-work distribution.
- Compare within field, technology category, year, and document type.
- Model downstream disruption as a function of cited-work diversity with controls for reference count and team history.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) uses diversity of work cited as one of three proxies for narrowing use of previous knowledge.
- The paper reports declining diversity of cited work for both papers and patents.
- Park et al. link lower cited-work diversity to lower disruption in subsequent regression models.
- Their full text frames the pattern as evidence that scientists and inventors are engaging with narrower slices of existing knowledge.

## Caveats

- Diversity depends on the chosen classification or embedding space.
- A short reference list can appear narrow for mechanical reasons, while a long ceremonial list can appear broad without substantive integration.
- Some focused contributions legitimately require a narrow predecessor set.

## Links

- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [reference-age search depth](reference_age_search_depth.md)
- [reference-popularity search](reference_popularity_search.md)
- [citation breadth via distinct cited sources](citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](citation_concentration_herfindahl.md)
- [top-cited predecessor concentration](top_cited_predecessor_concentration.md)
- [cited predecessor semantic diversity](cited_predecessor_semantic_diversity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [disruption index](disruption_index.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `cited_work_diversity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: cited knowledge diversity; reference diversity; predecessor diversity; cited-work breadth
