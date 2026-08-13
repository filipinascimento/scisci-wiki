# Research highlight mention counts

## Summary

Research highlight mention counts measure editorial attention from research-highlight outlets as a distinct altmetric source, separate from social-media posts, blogs, news, or reference-manager readership.

## Canonical Form

- Unit of analysis: paper, research-highlight mention, editorial source, mention date, or source count.
- Typical representation: Nature research highlight count, editorial-highlight citation, source-specific altmetric count, or highlighted-article flag.
- Measure target: capture editorial curation attention in online attention datasets.
- Empirical signature: research-highlight mentions are counted as a separate altmetric source and compared with citation outcomes.

## Uses in Science of Science

- Adds a source-specific measure to [social media attention channels](../datasets/social_media_attention_channels.md).
- Requires [altmetric source-list curation](../methods/altmetric_source_list_curation.md) to keep editorial sources distinct.
- Helps interpret [altmetric citation association](../validations/altmetric_citation_association.md).

## Operationalization

- Count per-paper mentions from research-highlight sources with source, date, and URL metadata.
- Keep editorial-highlight counts separate from blogs, news, and social-media counts.
- Report coverage and nonzero counts by journal and publication year.
- Treat highlight counts as curated editorial attention, not direct public engagement.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) includes Nature Publishing Group research highlights as one of the altmetric sources compared with Web of Science citations.
- The paper reports source-specific data and association tests for available altmetric sources.

## Caveats

- Editorial highlights reflect publisher or editor selection processes.
- Source availability and archive completeness can change over time.
- Counts may be highly sparse and publisher-specific.

## Links

- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric citation association](../validations/altmetric_citation_association.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `research_highlight_mention_counts`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: research-highlight altmetric count; editorial highlight mentions; Nature highlight attention count
