# Bridge-coauthor credit anomaly

## Summary

Bridge-coauthor credit anomaly occurs when an author who connects multiple related focal papers absorbs high co-citation credit despite not being the main recognized contributor.

## Canonical Form

- Unit of analysis: coauthor, related prize paper, co-citation neighborhood, credit-share vector, or validation failure.
- Typical representation: anomaly case where a bridge coauthor receives top inferred credit.
- Validation target: reveal a failure mode in citation-based credit allocation that may require contextual priors.
- Empirical signature: the algorithm's top-credit author differs from external recognition because the author bridges several related papers.

## Uses in Science of Science

- Qualifies [Nobel-prize credit validation](nobel_prize_credit_validation.md).
- Connects [credit allocation priors](../methods/credit_allocation_priors.md) to empirical failure modes.
- Adds a responsible-use caveat to [collective credit allocation](../measures/collective_credit_allocation.md) and [credit allocation matrix](../measures/credit_allocation_matrix.md).

## Operationalization

- Identify validation cases where inferred credit disagrees with an external recognition signal.
- Inspect whether a nonrecognized coauthor appears across several related focal or co-cited papers.
- Test whether author-order, corresponding-author, or field-specific priors reduce the anomaly.
- Report the anomaly as a method boundary rather than simply an error to hide.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) discusses a Nobel-prize validation failure where a researcher coauthors both prize-winning papers.
- The paper notes that this bridge position can draw top credit in the co-citation method even when the Nobel committee credited others.
- Shen and Barabasi point to contextual information such as author-order priors as a way to address some such anomalies.

## Caveats

- External recognition is not always a perfect ground truth.
- Bridge authors may genuinely contribute across related work, so the anomaly requires contextual interpretation.
- Priors can correct some cases while introducing discipline-specific bias.

## Links

- [Nobel-prize credit validation](nobel_prize_credit_validation.md)
- [credit allocation priors](../methods/credit_allocation_priors.md)
- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [disciplinary author-order boundary](disciplinary_author_order_boundary.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `bridge_coauthor_credit_anomaly`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: bridge-author credit anomaly; co-citation bridge failure mode; Nobel credit anomaly; credit bridge coauthor caveat
