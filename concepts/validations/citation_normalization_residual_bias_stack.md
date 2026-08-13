# Citation-normalization residual-bias stack

## Summary

Citation-normalization residual-bias stack is the validation checklist of citation-count biases that remain after field normalization, including self-citations, hidden citations, citation-window effects, growth, and author-count effects.

## Canonical Form

- Unit of analysis: paper, citation count, normalized score, field-year baseline, or evaluation indicator.
- Typical representation: residual-bias checklist, sensitivity table, normalization limitation note, or robustness stack.
- Validation target: prevent field normalization from being treated as a complete correction for all citation-count problems.
- Empirical signature: normalized indicators still require additional checks for self-citation, hidden influence, time, collaboration size, and document coverage.

## Uses in Science of Science

- Connects [self-citation rates](../measures/self_citation_rates.md), [hidden citations](../measures/hidden_citations.md), and [citation window selection](../methods/citation_window_selection.md) to field-normalized indicators.
- Extends [author-count citation normalization test](../methods/author_count_citation_normalization_test.md).
- Adds a limitation layer to [relative citation importance-scope caveat](relative_citation_importance_scope_caveat.md).
- Useful for responsible evaluation with [field-normalized citation impact](../measures/field_normalized_citation_impact.md).

## Operationalization

- Start with field-year normalized citation scores.
- Recompute or annotate scores with self-citation handling, citation window, author count, and document-type restrictions.
- Add hidden-citation or full-text citation caveats when available.
- Report which residual biases remain untested.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) notes that field differences are not the only limitation of citation-based assessment.
- The paper points to additional complications such as self-citations, implicit citations, time effects, and author-count effects.
- This motif is distinct from individual bias pages because it is the post-normalization checklist.
- It keeps field normalization from being overinterpreted as a complete fairness adjustment.

## Caveats

- The residual-bias stack can become long; studies should prioritize biases most relevant to the decision context.
- Some residual biases require data that many citation databases do not expose.
- Correcting one bias can change the interpretation of another.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [hidden citations](../measures/hidden_citations.md)
- [citation window selection](../methods/citation_window_selection.md)
- [author-count citation normalization test](../methods/author_count_citation_normalization_test.md)
- [relative citation importance-scope caveat](relative_citation_importance_scope_caveat.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `citation_normalization_residual_bias_stack`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: post-normalization citation bias checklist; residual citation-bias stack; field-normalization limitation stack; normalized citation residual bias audit
