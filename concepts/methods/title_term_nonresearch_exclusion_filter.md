# Title-term nonresearch exclusion filter

## Summary

Author-order panels may need transparent title-string exclusions for comments, replies, errata, corrections, and retraction notices beyond source document-type filters.

## Canonical Form

- Unit of analysis: publication record in a venue panel.
- Typical representation: document-type filter plus title-term exclusion list and before/after counts.
- Method target: removal of nonresearch items that can distort author-order histories.
- Empirical signature: exclusion terms identify records whose author order or citation role differs from research articles.

## Uses in Science of Science

- Complements [document-type citation filtering](document_type_citation_filtering.md) for venue-history construction.
- Useful when source document types are too broad or inconsistent for author-order analysis.
- Connects filtering rules to [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md) provenance.

## Operationalization

- Define inclusion document types and exclusion title terms before outcome analysis.
- Report counts removed by document type and by each title-term rule.
- Inspect false positives and false negatives in a sample of excluded records.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) applies title-term filtering rules to exclude nonresearch publication types in the venue panel.
- The rule makes author-order histories more comparable across journals and sources.

## Caveats

- Title filters can overexclude legitimate research papers or miss nonstandard notices.
- Filtering should be documented because exclusions can affect category shares in small venues.

## Links

- [Document-type citation filtering](document_type_citation_filtering.md)
- [Chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [Journal-set field-boundary filter](../validations/journal_set_field_boundary_filter.md)
- [Publisher-history augmentation for venue panels](publisher_history_augmentation_for_venue_panels.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `title_term_nonresearch_exclusion_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: title-string exclusion filter; nonresearch item title filter; venue-panel title-term filter
