# Title combinatorial novelty

## Summary

Title combinatorial novelty measures whether the words used in paper or patent titles appear in combinations that are new relative to earlier titles.

## Canonical Form

- Unit of analysis: paper title, patent title, word pair, field-year, technology-category-year, or vocabulary history.
- Typical representation: new word-pair share, reused-combination rate, combinatorial novelty score, or time trend in novel title combinations.
- Measurement target: lexical recombination in the front-facing description of new work.
- Empirical signature: later titles reuse word combinations that already appeared in prior work more often than earlier titles did.

## Uses in Science of Science

- Textual counterpart to [new journal-pair novelty](new_journal_pair_novelty.md), shifting the recombination unit from cited journals to title words.
- Complements [title word diversity](title_word_diversity.md) by distinguishing vocabulary breadth from new combinations of existing terms.
- Supports studies of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md) and [novelty and conventionality](../mechanisms/novelty_conventionality.md).
- Can be used as a lightweight signal when citation histories are too young for [disruption index](disruption_index.md) estimation.

## Operationalization

- Tokenize titles into a documented vocabulary.
- For each focal year, identify all word combinations observed in earlier titles within the field or technology category.
- Measure the share of title word pairs or combinations that are new versus previously observed.
- Normalize for title length, field vocabulary size, and corpus growth.
- Compare title-combination novelty with citation-based novelty and future impact measures.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) analyzes paper and patent titles as an alternative indicator for declining disruptive science and technology.
- The paper reports that the particular words used in titles are increasingly likely to have been used together in previous titles.
- Park et al. interpret this pattern as declining combinatorial novelty in the language of papers and patents.
- The same full text connects this title-based pattern to declining atypical combinations in cited prior work.

## Caveats

- Title wording is shaped by journal style, patent drafting conventions, search-engine visibility, and field terminology.
- Word-pair novelty does not imply conceptual novelty unless validated against content, references, or expert review.
- New terms can be synonyms, branding, or jargon rather than new scientific combinations.

## Links

- [title word diversity](title_word_diversity.md)
- [disruptive language shift](../validations/disruptive_language_shift.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [tail novelty](tail_novelty.md)
- [median conventionality](median_conventionality.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `title_combinatorial_novelty`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: title word-pair novelty; lexical combinatorial novelty; reused title combinations; title recombination novelty
