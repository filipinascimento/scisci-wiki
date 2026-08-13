# Journal-pair entity proxy boundary

## Summary

Journal-pair entity proxy boundary is the validation motif that cited-journal pairs are a coarse proxy for recombining knowledge components, not the components themselves.

## Canonical Form

- Unit of analysis: cited journal, cited-journal pair, reference pair, knowledge component, paper, or novelty score.
- Typical representation: journal-pair novelty, journal-pair distance, proxy-boundary caveat, or robustness check over special journal classes.
- Validation target: make the level of abstraction in recombination novelty measurement explicit.
- Empirical signature: novelty is measured as a new pair of cited journals even though the underlying knowledge components may be articles, methods, concepts, or fields.

## Uses in Science of Science

- Adds construct-validity detail to [new journal-pair novelty](../measures/new_journal_pair_novelty.md).
- Connects recombination novelty to [journal similarity mapping](../methods/journal_similarity_mapping.md), [co-citation](../representations/co_citation.md), and [title combinatorial novelty](../measures/title_combinatorial_novelty.md).
- Helps compare journal-pair novelty with term-pair, topic-pair, semantic, or citation-network novelty measures.
- Works with [historical newness lookback window](historical_newness_lookback_window.md) and [novelty-measure eligibility denominator](novelty_measure_eligibility_denominator.md).

## Operationalization

- State the knowledge-component proxy used by the novelty measure.
- Explain what the proxy can and cannot capture.
- Run robustness checks for young journals, star journals, multidisciplinary journals, or field-category effects.
- Compare with alternative component definitions when available, such as keywords, titles, concepts, topics, or semantic embeddings.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) treats journals as bodies of knowledge and measures novelty through new combinations of cited journals.
- The paper includes robustness checks around young, star, and multidisciplinary journals, indicating that the journal proxy can shape novelty classifications.
- This motif preserves the distinction between measured journal-pair newness and conceptual novelty.

## Caveats

- Journals can be heterogeneous and multidisciplinary, so a journal pair may be too coarse for fine-grained novelty.
- New journals can make pairs look novel for database reasons.
- Article-level or concept-level novelty measures can answer different questions.

## Links

- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [co-citation](../representations/co_citation.md)
- [title combinatorial novelty](../measures/title_combinatorial_novelty.md)
- [historical newness lookback window](historical_newness_lookback_window.md)
- [novelty-measure eligibility denominator](novelty_measure_eligibility_denominator.md)
- [novelty-atypicality distinction](novelty_atypicality_distinction.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `journal_pair_entity_proxy_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: journal-pair proxy caveat; cited-journal component boundary; journal-level novelty proxy; recombination unit validity boundary
