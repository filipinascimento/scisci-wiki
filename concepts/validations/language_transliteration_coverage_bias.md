# Language and transliteration coverage bias

## Summary

Language and transliteration coverage bias is the validation risk that citation-index source coverage and journal rankings underrepresent journals whose titles, references, or article metadata require translation, transliteration, or non-Roman-script handling.

## Canonical Form

- Unit of analysis: journal, source index, language group, script, country, title-normalization rule, or ranking table.
- Typical representation: language-coverage audit, transliteration-bias check, regional source-gap table, or non-Roman-script coverage caveat.
- Validation target: determine whether source selection and citation counts are biased by language and script handling.
- Empirical signature: journals in languages or scripts requiring transliteration are less likely to be indexed, normalized, or ranked accurately even when they are important within their citation communities.

## Uses in Science of Science

- Specializes [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for language, script, and transliteration constraints.
- Adds a source-selection caveat to [citation-based source selection](../methods/citation_based_source_selection.md), [Web of Science](../datasets/web_of_science.md), and journal-level indicators.
- Complements [cited journal title normalization](../methods/cited_journal_title_normalization.md) by emphasizing coverage and rank effects, not only string cleanup.
- Helps interpret cross-national or regional bibliometric comparisons where local journals and non-English citation communities matter.

## Operationalization

- Report source coverage by language, country, script, and transliteration requirement.
- Compare citation ranks before and after adding candidate non-English or non-Roman-script journals.
- Audit whether cited-title variants for translated and transliterated journals are merged correctly.
- Check whether within-language citation communities are missed by a source index optimized for internationally cited journals.
- Treat missing-language coverage as a substantive denominator problem, not only metadata noise.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) notes that SCI, like many secondary services, was less likely to cover journals that posed transliteration or translation problems.
- Garfield specifically raises the possibility that Russian and Japanese journals could have rankings adversely affected because they may cite other Russian and Japanese journals more frequently than journals in other languages do.
- The paper states that whether such underrepresentation exists and its extent are difficult to determine.
- The same discussion ties source coverage, language handling, and journal ranking robustness together.

## Caveats

- Lower international citation counts can reflect field scope, audience, or source-set boundaries as well as language bias.
- Adding more local journals can improve representation while changing cross-field comparability.
- Transliteration coverage should be paired with title-normalization audits to avoid both missing and duplicate journal identities.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)
- [Web of Science](../datasets/web_of_science.md)
- [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md)
- [locally relevant research metrics](locally_relevant_research_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `language_transliteration_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: transliteration coverage bias; non-Roman-script journal bias; foreign-language source coverage bias; language-biased citation indexing
