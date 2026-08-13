# Title word diversity

## Summary

Title word diversity measures how varied the vocabulary of paper or patent titles is within a field, technology class, or time period.

## Canonical Form

- Unit of analysis: field-year, technology-category-year, paper title, patent title, abstract corpus, or vocabulary window.
- Typical representation: type-token ratio, unique-word share, vocabulary diversity curve, or field-normalized lexical diversity trend.
- Measurement target: whether new work is introducing a broad range of terms or reusing a narrower vocabulary.
- Empirical signature: declining unique-word share in titles or abstracts over time within comparable fields.

## Uses in Science of Science

- Provides a text-based signal for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) when citation networks are unavailable or need independent corroboration.
- Operationalizes one aspect of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md), because repeated vocabulary can indicate narrower conceptual search.
- Complements [title combinatorial novelty](title_combinatorial_novelty.md), which tracks reused word pairings rather than individual word variety.
- Links text-based evidence to [semantic embeddings](../representations/semantic_embeddings.md) and [topic models](../methods/topic_models.md).

## Operationalization

- Collect titles or abstracts for papers or patents in a comparable field and year.
- Tokenize consistently, handling punctuation, case, stemming, stop words, and scientific symbols with documented rules.
- Compute the type-token ratio or a size-adjusted vocabulary diversity statistic.
- Compare trends within field, technology category, language, and document type.
- Validate against semantic and citation-based indicators before treating lexical narrowing as substantive narrowing.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) uses type-token ratios, defined as unique words divided by total words, for paper and patent titles.
- The paper reports title-word diversity declines from 1945 to 2010 for papers and from 1980 to 2010 for patents.
- Park et al. report paper-title declines ranging from 76.5 percent in social sciences to 88 percent in technology, and patent-title declines ranging from 32.5 percent in chemical patents to 81 percent in computers and communications.
- The same full text reports abstract-word diversity declines for papers from 1992 to 2010 and for patents from 1980 to 2010.

## Caveats

- Type-token ratios are sensitive to corpus size, tokenization, language, title-length changes, and document-type mix.
- Declining vocabulary diversity can reflect standardization, indexing conventions, or terminology consolidation rather than declining discovery.
- Field-specific technical vocabularies can be narrow because they are precise, not because search is weak.

## Links

- [title combinatorial novelty](title_combinatorial_novelty.md)
- [disruptive language shift](../validations/disruptive_language_shift.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [topic models](../methods/topic_models.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `title_word_diversity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: title vocabulary diversity; type-token ratio titles; lexical diversity in science; title vocabulary narrowing
