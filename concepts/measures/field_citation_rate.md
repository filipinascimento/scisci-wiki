# Field citation rate

## Summary

Field citation rate estimates the citation-rate baseline of a paper's dynamically defined field.

## Canonical Form

- Unit of analysis: paper, co-citation network, field comparator, or benchmark calculation.
- Typical representation: average journal or article citation rate for papers in a paper-specific field.
- Mechanism or measurement target: expected citation intensity of the field surrounding a focal paper.
- Empirical signature: papers in high-citation and low-citation fields receive different baselines before article-level influence is assessed.

## Uses in Science of Science

- Provides the field-normalization input for [Relative Citation Ratio](relative_citation_ratio.md).
- Converts a [co-citation field normalization](../methods/co_citation_field_normalization.md) step into a numeric comparator.
- Helps audit whether article-level indicators are using journal categories, citation neighborhoods, or other field definitions.

## Operationalization

- Build a focal paper's comparison field, often from its co-citation network.
- Compute citation-rate values for journals or papers represented in that field.
- Average those values to obtain a field citation rate.
- Check stability as the co-citation network grows with additional citations.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) defines field citation rate from a focal article's co-citation network.
- In their implementation, the field citation rate is based on average journal citation rates represented in the co-citation network.
- Hutchins et al. compare co-citation, citing, and cited networks and find lower FCR variance for co-citation-network fields.
- They report that FCR values converge quickly, passing a high stability threshold after roughly five citations.
- That convergence test is split out as [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md), which also records when early RCR values should be treated as provisional.
- The same full text now supports split-out motifs for [co-citation network field definition](../representations/co_citation_network_field_definition.md) and [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md).

## Caveats

- FCR depends on the chosen field-construction rule and on whether journal or article citation rates are used.
- It can be unstable for uncited or barely cited recent papers.
- The metric should not be interpreted without the underlying citation window and benchmark design.

## Links

- [Relative Citation Ratio](relative_citation_ratio.md)
- [article citation rate](article_citation_rate.md)
- [expected citation rate](expected_citation_rate.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md)
- [co-citation field stabilization check](../validations/co_citation_field_stabilization_check.md)
- [co-citation](../representations/co_citation.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `field_citation_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: FCR; co-citation field citation rate; field CPY baseline; paper-specific field rate
