# Co-citation field normalization

## Summary

Co-citation field normalization defines a focal paper's comparison field from the papers co-cited with it and then normalizes citation impact against that field.

## Canonical Form

- Unit of analysis: focal paper, co-citation network, reference set, field comparator, or citation indicator.
- Typical representation: paper-specific co-citation field plus field citation rate.
- Mechanism or measurement target: dynamic field boundaries based on citing-community behavior.
- Empirical signature: the comparison field grows as later papers cite the focal paper alongside related prior work.

## Uses in Science of Science

- Provides a paper-specific alternative to journal-category field normalization.
- Supports [Relative Citation Ratio](../measures/relative_citation_ratio.md), dynamic reference-set construction, and interdisciplinary-paper evaluation.
- Links [co-citation](../representations/co_citation.md) to article-level citation metrics.

## Operationalization

- Identify papers that cite the focal paper.
- Collect the other references appearing alongside the focal paper in those citing papers.
- Deduplicate or weight the co-cited papers according to the metric design.
- Estimate a [field citation rate](../measures/field_citation_rate.md) from the resulting field and combine it with benchmark normalization.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) chooses co-citation networks to describe an individual paper's field because they grow faster than citing networks and can cross traditional disciplinary boundaries.
- The paper validates co-citation fields by comparing title/abstract cosine similarity: focal papers are more similar to their co-citation networks than to papers in the same journal.
- Hutchins et al. also show that field citation rates based on co-citation networks have lower variance than field rates based on citing or cited networks.
- This makes co-citation field normalization a method motif for constructing dynamic, paper-level reference fields.
- The representation, text-validation, and temporal-stability pieces are split out as [co-citation network field definition](../representations/co_citation_network_field_definition.md), [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md), and [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md).

## Caveats

- A co-citation field cannot exist until the focal paper has received citations.
- Citation choices encode attention, status, and reference-list conventions as well as topical relatedness.
- Co-citation fields can shift over time as new communities cite the paper.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md)
- [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [field citation rate](../measures/field_citation_rate.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [reference set construction](reference_set_construction.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [science maps](../representations/science_maps.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_field_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: dynamic co-citation field; paper-specific reference field; co-citation reference set; RCR field normalization
