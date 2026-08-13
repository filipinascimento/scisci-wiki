# Citation-indicator review corpus

## Summary

The citation-indicator review corpus is the literature-search dataset Waltman (2016) built from bibliometrics, scientometrics, and research-evaluation journals to review citation-impact indicators.

## Canonical Form

- Unit of analysis: publication, cited external work, journal source, citation relation, or review topic.
- Typical representation: seed journal panel plus a citation network expanded by highly cited external publications.
- Dataset target: recover a broad but auditable citation-impact-indicator literature for review and concept synthesis.
- Empirical signature: a bounded source-journal corpus is enlarged by cited books and publications outside the source journals, producing a review-specific citation network.

## Uses in Science of Science

- Provides a traceable evidence base for [citation impact indicators](../measures/citation_impact_indicators.md).
- Demonstrates how [Web of Science](web_of_science.md) can be used as a source spine for a review even when relevant books and papers lie outside the seed journals.
- Pairs with [CitNetExplorer review snowballing](../methods/citnetexplorer_review_snowballing.md) to make review expansion reproducible.
- Exposes database-source caveats such as [bibliographic database staleness caveat](../validations/bibliographic_database_staleness_caveat.md) and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Operationalization

- Select core and citation-proximate journals in bibliometrics, scientometrics, and research evaluation.
- Download publication and citation data for the journal panel from Web of Science.
- Build the citation network of the seed corpus.
- Add non-seed publications, including books, when they are cited frequently enough by the seed journals.
- Use the resulting network as the search substrate for topic-specific review expansion.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that the review starts from about 26,000 publications in 14 journals selected because they are core journals or have strong citation relations to core journals in bibliometrics, scientometrics, and research evaluation.
- Waltman reports that CitNetExplorer added publications outside the 14 journals when they were cited at least ten times by the seed journals.
- This expansion yielded a citation network of almost 30,000 publications, including non-journal publications such as books.
- The paper frames the corpus as semi-systematic rather than exhaustive, because topic choice, initial seeds, manual relevance decisions, and citation counts all influenced inclusion.

## Caveats

- A core-journal seed can miss relevant literature in adjacent fields if it is weakly cited by the seed journals.
- Citation thresholds favor already visible work and may underrepresent newer or low-cited methodological contributions.
- The corpus was built from a Web of Science snapshot, so later database changes can alter the recoverable set.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [CitNetExplorer review snowballing](../methods/citnetexplorer_review_snowballing.md)
- [Web of Science](web_of_science.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [bibliographic database staleness caveat](../validations/bibliographic_database_staleness_caveat.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `citation_indicator_review_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: citation indicator review dataset; bibliometrics review corpus; citation impact literature corpus; Waltman review citation network
