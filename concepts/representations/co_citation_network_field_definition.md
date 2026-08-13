# Co-citation network field definition

## Summary

Co-citation network field definition represents a focal paper's field as the papers that appear alongside it in later citing papers' reference lists.

## Canonical Form

- Unit of analysis: focal paper, citing paper, co-cited paper, co-citation edge, citation snapshot, or dynamic field.
- Typical representation: paper-specific co-citation network with nodes for co-cited papers and edges for shared reference-list context.
- Representation target: define a focal paper's active intellectual field from downstream citing behavior.
- Empirical signature: the field grows as more papers cite the focal paper and bring additional co-cited papers into its neighborhood.

## Uses in Science of Science

- Supplies the field representation behind [co-citation field normalization](../methods/co_citation_field_normalization.md).
- Supports [field citation rate](../measures/field_citation_rate.md), [expected citation rate](../measures/expected_citation_rate.md), and [Relative Citation Ratio](../measures/relative_citation_ratio.md).
- Provides a dynamic alternative to fixed [field classifications](../measures/field_classifications.md) and journal categories.
- Can be validated with [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md).

## Operationalization

- Identify papers that cite the focal reference article.
- Collect other papers appearing in those citing papers' reference lists.
- Represent the resulting set as a network or deduplicated field set, recording citation snapshot date.
- Track network growth with additional citations and decide whether duplicate co-citation events are weighted.
- Compare against citing-network and cited-network field definitions when stability matters.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) defines a co-citation network as the other papers appearing in reference lists alongside the reference article.
- The paper contrasts this with citing networks and cited networks, then chooses co-citation networks because they grow faster and better avoid finite-number effects for low-cited articles.
- Hutchins et al. report that each additional citation adds an average of 17.8 new papers to the co-citation network in their biomedical sample.
- The verified text argues that co-citation fields can cross traditional disciplinary boundaries while still reflecting publishing scientists' judgments of relevance.
- The same growth property motivates [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md), where early and later FCR snapshots are compared.

## Caveats

- A co-citation field is unavailable for uncited papers and provisional for barely cited papers.
- Co-citation fields are shaped by citation practices, reference-list length, and visibility effects.
- The field can change over time as new communities cite the focal paper.

## Links

- [co-citation](co_citation.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [field citation rate](../measures/field_citation_rate.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md)
- [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](science_maps.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `co_citation_network_field_definition`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: paper-specific co-citation field; RCR co-citation field; dynamic citation field; co-cited field neighborhood
