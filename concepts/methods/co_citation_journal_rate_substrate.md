# Co-citation journal-rate substrate

## Summary

RCR estimates a focal article's field baseline from journal citation rates represented in its co-citation neighborhood.

## Canonical Form

- Unit of analysis: focal article, co-cited article, journal, publication year, JCR value, or field citation rate.
- Typical representation: co-citation field mapped to journal-year citation-rate values.
- Mechanism, measurement, or validation target: venue-rate substrate for dynamic field citation baselines.
- Empirical signature: field citation rates change when the co-cited article set maps to a different journal-year mix.

## Uses in Science of Science

- Refines RCR denominator construction by linking it to [field citation rate](../measures/field_citation_rate.md) and [co citation network field definition](../representations/co_citation_network_field_definition.md).
- Useful as a reusable check when [co citation field normalization](co_citation_field_normalization.md) is used in science-of-science inference.
- Creates cross-links to [journal impact factor](../measures/journal_impact_factor.md) so the motif is not interpreted in isolation.

## Operationalization

- Build the focal paper's co-citation network from citing articles and their reference lists.
- Map co-cited articles to journal and publication year, then attach the corresponding synchronous journal citation rate.
- Average the represented journal-year rates into the field citation rate and document missing journal-year cases.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) rejects averaging raw article citation rates as unstable and instead uses publication-year journal citation rates represented by co-cited articles.
- The method makes the RCR field denominator a hybrid of article-level co-citation neighborhoods and journal-level citation-rate substrate.

## Caveats

- The substrate reintroduces journal-level assumptions into an article-level metric.
- JCR or WoS coverage gaps can change the denominator even when the co-citation field is correctly identified.

## Links

- [Field citation rate](../measures/field_citation_rate.md)
- [Co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [Co-citation field normalization](co_citation_field_normalization.md)
- [Journal impact factor](../measures/journal_impact_factor.md)
- [Citation-network field variance check](../validations/citation_network_field_variance_check.md)
- [RCR denominator aggregation sensitivity](../validations/rcr_denominator_aggregation_sensitivity.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `co_citation_journal_rate_substrate`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: JCR-based FCR; co-citation JCR substrate; journal-rate field baseline
