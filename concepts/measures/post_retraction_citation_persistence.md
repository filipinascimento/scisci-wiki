# Post-retraction citation persistence

## Summary

Post-retraction citation persistence measures whether retracted work continues to receive citations after formal correction.

## Canonical Form

- Unit of analysis: retracted article, citing article, citation year, citation context, journal, field, or cause category.
- Typical representation: pre/post citation trajectory, post-retraction citation rate, citation-context audit, or interrupted time-series design.
- Mechanism or measurement target: persistence of invalidated claims and visibility of correction signals.
- Empirical signature: citations continue after a paper has been marked retracted.

## Uses in Science of Science

- Tests whether [retractions and scientific self-correction](../validations/retractions_self_correction.md) effectively interrupt downstream attention.
- Connects correction systems to [citation networks](../representations/citation_networks.md) and [citation context windows](../representations/citation_context_windows.md).
- Helps distinguish harmful continued use from citations that discuss the retraction, controversy, history, or partial residual value.
- Provides a validation metric for retraction notices, publisher marking, indexing systems, and literature-review workflows.

## Operationalization

- Identify retracted works and their retraction dates.
- Track citing articles before and after retraction using citation databases.
- Use citation contexts to distinguish endorsement, criticism, historical discussion, controversy, or uncertainty.
- Compare citation decline across notice transparency, cause category, field, journal, and retracted-article visibility.
- Pair persistence analysis with [continued access to retracted articles](../methods/continued_access_retracted_articles.md), because access policy determines whether warnings and reasons stay attached to the article.

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) notes that previous studies found many retracted articles continue to be cited as valid work, while other work found an immediate effect of retraction on citation frequency.
- Fang et al. report substantial variation among highly cited retracted articles: some show rapid and sustained citation decline after retraction, while others continue to be cited.
- The paper lists highly cited retracted articles and argues that continued citation can reflect controversy, uncertainty, or continued perceived utility in parts of an erroneous paper.
- Fang et al. support continued access to retracted articles when detailed reasons for retraction are provided, because downstream users need the context for interpretation.
- That access-policy implication is split out as [continued access to retracted articles](../methods/continued_access_retracted_articles.md).

## Caveats

- A post-retraction citation is not automatically misuse; it may cite the retraction, controversy, or historical case.
- Citation databases may not always expose retraction status at the point of use.
- Contextual interpretation requires full text, not citation counts alone.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [time-to-retraction](time_to_retraction.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [continued access to retracted articles](../methods/continued_access_retracted_articles.md)
- [citation networks](../representations/citation_networks.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [responsible metrics](responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `post_retraction_citation_persistence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Aliases: continued citation after retraction; post-retraction citation rate; retracted-paper citation persistence; citation after correction
