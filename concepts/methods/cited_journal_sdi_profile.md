# Cited-journal SDI profile

## Summary

Cited-journal SDI profile retrieves newly indexed articles by testing whether their reference lists cite any journal in a small cited-journal query set.

## Canonical Form

- Unit of analysis: newly indexed article, cited journal, reference list, SDI profile, or retrieval rule.
- Typical representation: list of cited-journal questions used as a selective-dissemination profile.
- Method target: alert users to new articles likely to be relevant because they cite journals central to a specialty or interest area.
- Empirical signature: a small cited-journal query set retrieves a large share of newly processed articles.

## Uses in Science of Science

- Adds a journal-level retrieval counterpart to [citation-index alerting service](citation_index_alerting_service.md).
- Complements [co-citation SDI profile](co_citation_sdi_profile.md), where the query unit is a co-cited paper set.
- Uses [journal citation frequency](../measures/journal_citation_frequency.md) to choose high-yield cited-journal queries.
- Connects to [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md) and [source journal reference profile](../representations/source_journal_reference_profile.md).

## Operationalization

- Select cited journals that define or efficiently cover a user interest area.
- Scan incoming citation-index records for references to those cited journals.
- Retrieve or alert on articles whose bibliographies include at least one selected cited journal.
- Monitor precision and coverage as the journal set changes.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) describes weekly scanning of SCI input for selective dissemination of information.
- Garfield states that newly published articles could be retrieved based on journals cited in their bibliographies or footnotes.
- The paper reports that a profile of 25 cited-journal questions could retrieve about half of all weekly SCI-processed articles.

## Caveats

- High-yield cited journals can retrieve broad, noisy article sets.
- Cited-journal SDI favors articles that cite established journal cores and can miss emerging venues.
- Retrieval performance depends on cited-title normalization and source coverage.

## Links

- [citation-index alerting service](citation_index_alerting_service.md)
- [co-citation SDI profile](co_citation_sdi_profile.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; SciSciNet: W2053549370; WoS: unknown]

## Metadata

- Concept ID: `cited_journal_sdi_profile`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited-journal alert profile; cited journal question; journal-reference SDI profile; cited-title retrieval profile
