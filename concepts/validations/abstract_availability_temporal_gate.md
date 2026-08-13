# Abstract-availability temporal gate

## Summary

Abstract-availability temporal gate requires text-based trend measures to start only when abstract and title capture is reliable enough to avoid source-availability artifacts.

## Canonical Form

- Unit of analysis: record, abstract, title, source year, field-year cell, or text-derived trend.
- Typical representation: text-coverage threshold, start-year gate, missing-abstract caveat, or source-availability audit.
- Validation target: prevent changes in recorded text availability from masquerading as changes in language, novelty, or topical diversity.
- Empirical signature: abstract-based analyses begin later than citation-based analyses because early abstract capture is incomplete.

## Uses in Science of Science

- Qualifies text-derived measures such as [title word diversity](../measures/title_word_diversity.md).
- Connects to [title/abstract/full-text embedding limits](title_abstract_full_text_embedding_limit.md).
- Helps audit models that rely on [OpenAlex concept classifiers](../methods/openalex_concept_classifier.md), embeddings, abstracts, or titles.
- Generalizes to long-run studies of semantic change, novelty, terminology, and topic diversity.

## Operationalization

- Measure abstract and title coverage by year, field, source, and document type.
- Set a minimum coverage threshold before computing text-derived trends.
- Start abstract-based trend panels at the first reliable coverage period.
- Report when citation-based and abstract-based windows differ.
- Run sensitivity checks using titles only or full text where abstracts are unavailable.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) reports that Web of Science includes titles and full abstracts for millions of records, but that abstract availability differs from citation availability.
- Their abstract-based language-diversity figure begins paper-abstract lines in 1992 because Web of Science does not reliably record abstracts before the early 1990s.
- This supports using a temporal gate when text-derived measures are used to corroborate citation-network trends.

## Caveats

- Coverage thresholds can differ by field, language, document type, and database.
- Title-only analyses can extend farther back but may capture a different construct from abstracts.
- Text availability is not the same as text quality; OCR, encoding, and truncation also need checks.

## Links

- [title word diversity](../measures/title_word_diversity.md)
- [title/abstract/full-text embedding limit](title_abstract_full_text_embedding_limit.md)
- [OpenAlex concept classifier](../methods/openalex_concept_classifier.md)
- [disruptive language shift](disruptive_language_shift.md)
- [postwar analytic-window guardrail](../methods/postwar_analytic_window_guardrail.md)
- [semantic embeddings](../representations/semantic_embeddings.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `abstract_availability_temporal_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: abstract coverage start gate; text-availability temporal filter; abstract-recording reliability gate; language-trend source-coverage guard
