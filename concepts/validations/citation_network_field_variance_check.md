# Citation-network field variance check

## Summary

Citation-network field variance check validates paper-specific field definitions by comparing citation-rate variance across candidate citation-network reference sets.

## Canonical Form

- Unit of analysis: paper, citation network level, field citation rate, expected citation rate, or benchmark corpus.
- Typical representation: variance table for cited, citing, co-citation, and journal-impact-factor comparators.
- Validation target: field definitions that better separate between-field from within-field citation behavior.
- Empirical signature: the preferred reference set has lower within-field citation-rate variance than alternatives.

## Uses in Science of Science

- Provides a validation for [field citation rate](../measures/field_citation_rate.md).
- Supports [co-citation field normalization](../methods/co_citation_field_normalization.md) and [co-citation network field definition](../representations/co_citation_network_field_definition.md).
- Complements [co-citation field text-similarity validation](co_citation_field_text_similarity_validation.md) with a citation-rate variance test.
- Links dynamic field construction to broader [reference set construction](../methods/reference_set_construction.md).

## Operationalization

- Construct competing reference sets around each focal paper using cited, citing, co-citation, journal, or other field definitions.
- Compute field citation rates and expected citation rates for each candidate network level.
- Compare variance across candidate field definitions.
- Prefer field definitions with lower within-field citation-rate variance, while checking interpretability and coverage.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) compares field citation rates based on co-citation, cited, and citing networks.
- The paper argues that a better field definition should approach maximal separation of between-field and within-field citation behavior, producing lower expected variance in citations per year.
- Hutchins et al. report lower FCR and ECR variance for co-citation networks than for cited networks, citing networks, or journal impact factor comparators.

## Caveats

- Lower variance is not automatically better if it is produced by overbroad or substantively incoherent reference sets.
- Citation-rate variance should be combined with textual, expert, or classification validation.
- Variance checks depend on citation window, benchmark corpus, and inclusion criteria.

## Links

- [field citation rate](../measures/field_citation_rate.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [co-citation field text-similarity validation](co_citation_field_text_similarity_validation.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `citation_network_field_variance_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: FCR variance check; co-citation field variance validation; field-definition variance test; citation-network comparator variance
