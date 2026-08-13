# Conference/journal double counting

## Summary

Conference/journal double counting is the validation problem that the same research can appear as both a conference-proceedings publication and a journal article, inflating output counts and changing citations per publication.

## Canonical Form

- Unit of analysis: work, conference paper, journal article, duplicate publication pair, author portfolio, field denominator, or database record.
- Typical representation: duplicate-link audit, work-level deduplication rule, proceedings-journal overlap estimate, or sensitivity table.
- Validation target: avoid counting one scholarly contribution as multiple independent outputs.
- Empirical signature: publication counts rise artificially and average citations per publication fall when duplicate proceedings/journal records are both retained.

## Uses in Science of Science

- Adds a work-level duplicate audit to [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md).
- Qualifies size-independent [citation impact indicators](../measures/citation_impact_indicators.md), where denominator inflation can lower averages.
- Links to [document-type citation filtering](../methods/document_type_citation_filtering.md) when deciding whether proceedings and journal versions belong in the same reference set.
- Supports [responsible metrics](../measures/responsible_metrics.md) by preventing publication-count gaming or accidental output inflation.

## Operationalization

- Match proceedings and journal records by title, author set, DOI links, venue metadata, year, and textual similarity.
- Decide whether to deduplicate to a work-level record or retain versions with explicit version labels.
- Recompute publication counts, citations per publication, and highly cited shares with and without duplicate versions.
- Report field-specific rules because conference-to-journal publication norms vary by discipline.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) identifies double counting as a major difficulty when conference proceedings are included in citation analyses.
- Waltman states that work published both in proceedings and in journals can artificially increase publication counts.
- The review also notes a denominator effect: because duplicate records increase the publication count, citation counts per publication are likely to decrease.

## Caveats

- Some proceedings and journal papers are genuinely distinct versions with different content and should not always be collapsed.
- DOI matching alone can miss duplicates when versions have separate identifiers.
- Deduplication rules can affect fields differently because publication practices differ.

## Links

- [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [publication citation unit choice](../methods/publication_citation_unit_choice.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `conference_journal_double_counting`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: proceedings journal duplicate counting; conference journal duplicate records; work-level proceedings deduplication; proceedings article double count
