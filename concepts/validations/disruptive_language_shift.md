# Disruptive language shift

## Summary

Disruptive language shift is a text-based validation motif in which the verbs and descriptive language of papers or patents move from creation and discovery toward improvement, application, and assessment.

## Canonical Form

- Unit of analysis: title, abstract, verb class, field-year, technology-category-year, or document corpus.
- Typical representation: verb-frequency comparison, creation-versus-improvement lexicon, first-versus-last-decade contrast, or lexical validation plot.
- Validation target: whether citation-based disruption trends are mirrored by language that describes what work is doing.
- Empirical signature: creation, discovery, and perception verbs become less common while improvement, application, and assessment verbs become more common.

## Uses in Science of Science

- Provides independent text evidence for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Extends [disruption measure validation](disruption_measure_validation.md) beyond expert examples and citation neighborhoods.
- Pairs with [title word diversity](../measures/title_word_diversity.md) and [title combinatorial novelty](../measures/title_combinatorial_novelty.md).
- Helps interpret whether lower disruption scores reflect a broader shift in the described nature of scientific and technological work.

## Operationalization

- Extract titles or abstracts and tag verbs with a consistent parser or curated lexicon.
- Classify verbs into creation, discovery, perception, improvement, application, assessment, or other categories.
- Compare verb frequencies over time within field and document type.
- Use examples and error audits because verb meaning is context-dependent.
- Treat the measure as corroborative evidence rather than a standalone disruption score.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) compares the most common verbs in paper and patent titles from the first and last decades of the observation window.
- The paper reports that earlier title verbs more often evoke creation, discovery, and perception, while later title verbs are more evocative of improvement, application, and assessment.
- Park et al. interpret this language shift as consistent with declining disruptive activity measured by the CD index.
- The authors emphasize that classifying words as disruptive or consolidating is difficult without context, making this a qualitative validation rather than a fully mechanical score.

## Caveats

- Verb meaning depends on scientific context, field, and drafting convention.
- Changes in title style, patent language, indexing, and journal norms can generate apparent language shifts.
- A paper can use improvement language while still being substantively disruptive.

## Links

- [disruption measure validation](disruption_measure_validation.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [title word diversity](../measures/title_word_diversity.md)
- [title combinatorial novelty](../measures/title_combinatorial_novelty.md)
- [disruption index](../measures/disruption_index.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruptive_language_shift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: disruption verb shift; disruptive versus consolidating verbs; creation-to-improvement language shift; title verb validation
