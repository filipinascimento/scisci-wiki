# Co-cited article deduplication rule

## Summary

RCR needs an explicit rule for whether co-cited papers enter the focal field once or repeatedly when they recur across citing reference lists.

## Canonical Form

- Unit of analysis: citing article, co-cited article, focal paper, reference list, or co-citation field node.
- Typical representation: deduplicated co-cited article list with optional repeated journal representation.
- Mechanism, measurement, or validation target: node weighting in co-citation-defined reference fields.
- Empirical signature: field composition differs between unique co-cited-paper nodes and repeated co-citation-strength weighting.

## Uses in Science of Science

- Refines co-citation field construction by linking it to [co citation network field definition](../representations/co_citation_network_field_definition.md) and [co citation field normalization](co_citation_field_normalization.md).
- Useful as a reusable check when [co citation strength](../measures/co_citation_strength.md) is used in science-of-science inference.
- Creates cross-links to [co citation pair universe denominator](../validations/co_citation_pair_universe_denominator.md) so the motif is not interpreted in isolation.

## Operationalization

- Enumerate all citing papers and collect their references alongside the focal article.
- Deduplicate co-cited papers at the article level before constructing the field node list.
- Separately document whether downstream journal-rate representation or edge strength reintroduces repeated weights.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) says co-cited papers are counted once for network growth and describes deduplicating the co-cited-paper list.
- This turns co-citation field construction into a concrete node-weighting decision.

## Caveats

- Deduplication ignores repeated association strength that may be substantively meaningful.
- Reference-list length and database coverage still shape which co-cited papers can enter the field.

## Links

- [Co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [Co-citation field normalization](co_citation_field_normalization.md)
- [Co-citation strength](../measures/co_citation_strength.md)
- [Co-citation pair-universe denominator](../validations/co_citation_pair_universe_denominator.md)
- [Within-paper reference-pair enumeration](within_paper_reference_pair_enumeration.md)
- [Co-citation journal-rate substrate](co_citation_journal_rate_substrate.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `co_cited_article_deduplication_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: co-cited paper unique-node rule; co-citation dedupe; unweighted co-cited field
