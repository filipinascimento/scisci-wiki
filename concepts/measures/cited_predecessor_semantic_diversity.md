# Cited predecessor semantic diversity

## Summary

Cited predecessor semantic diversity measures how topically varied the highly cited prior works used by papers or patents are.

## Canonical Form

- Unit of analysis: cited predecessor set, top-cited predecessor group, field-year, technology-category-year, title embedding, or reference list.
- Typical representation: pairwise embedding-similarity dispersion, coefficient of variation, semantic diversity curve, or diversity-of-elite-predecessors trend.
- Measurement target: whether the influential prior works being reused are topically broad or increasingly similar.
- Empirical signature: semantic diversity among top-cited predecessors falls as fields rely on narrower prior knowledge.

## Uses in Science of Science

- Adds a semantic layer to [top-cited predecessor concentration](top_cited_predecessor_concentration.md).
- Complements [cited work diversity](cited_work_diversity.md), which may use categories or citation clusters instead of embeddings.
- Connects [semantic embeddings](../representations/semantic_embeddings.md) and [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) to disruption and knowledge-use studies.
- Helps test whether concentration in highly cited predecessors also means concentration in topical content.

## Operationalization

- Identify the top-cited predecessor set within each field-year or technology-category-year.
- Represent predecessor titles, abstracts, or documents with word or document embeddings.
- Compute pairwise cosine similarities among predecessor embeddings.
- Summarize dispersion or coefficient of variation within the top-cited predecessor set.
- Compare trends over time and relate them to disruption, citation concentration, and reference diversity.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) computes semantic diversity among the 1 percent most cited papers and patents within field and year.
- The paper represents titles using pretrained word embeddings and summarizes semantic diversity using the coefficient of variation of pairwise cosine similarity.
- Park et al. report that semantic diversity among highly cited predecessors decreases over time.
- This decline accompanies rising citation concentration in top-cited predecessors, supporting the broader [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md) mechanism.

## Caveats

- Title-only embeddings can miss methodological, data, or theoretical content that is not visible in titles.
- Embedding models trained on general language may underrepresent specialized scientific semantics.
- Semantic diversity is sensitive to preprocessing, field boundaries, and how the top-cited predecessor set is defined.

## Links

- [top-cited predecessor concentration](top_cited_predecessor_concentration.md)
- [cited work diversity](cited_work_diversity.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [topic models](../methods/topic_models.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `cited_predecessor_semantic_diversity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: semantic diversity of top-cited predecessors; cited-title embedding diversity; predecessor semantic breadth; elite-reference semantic diversity
