# Preferential attachment activation threshold

## Summary

Preferential attachment activation threshold is the mechanism claim that cumulative-advantage dynamics become empirically distinguishable only above a low citation or fitness threshold, while very low-impact papers can appear governed by aging and baseline attractiveness alone.

## Canonical Form

- Unit of analysis: paper, citation trajectory, fitted fitness, lifetime citation estimate, or citation-count threshold.
- Typical representation: threshold inequality, low-fitness approximation, model-ablation comparison, or citation-count cutoff.
- Mechanism target: identify when previous citations materially increase future citation probability beyond aging and baseline attention.
- Empirical signature: a no-attachment or lognormal-aging model fits low-impact papers but fails for medium- and high-impact papers.

## Uses in Science of Science

- Refines [preferential attachment](preferential_attachment.md) and [cumulative advantage](cumulative_advantage.md) by making the turn-on condition explicit.
- Explains why low-citation papers can mask attachment effects in aggregate citation-model tests.
- Supports [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md) by identifying which model components matter by impact regime.
- Links [paper fitness](../measures/paper_fitness.md) and [ultimate citation impact](../measures/ultimate_citation_impact.md) to cumulative-advantage detectability.

## Operationalization

- Fit citation trajectories with and without a preferential-attachment term.
- Derive or estimate the citation or fitness range where the no-attachment approximation is indistinguishable from the full model.
- Compare model fit separately for low-, medium-, and high-impact papers.
- Report the threshold in both fitted parameter terms and observable citation-count terms when possible.
- Re-estimate thresholds by field, database, document type, and citation-window length before generalizing.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) shows that ignoring preferential attachment yields a lognormal temporal-decay model with a single fitness parameter.
- The paper states that this lognormal model captures citation histories of small-impact papers but fails for medium- and high-impact papers.
- Wang et al. derive a threshold where the no-attachment approximation is indistinguishable from the full model, reporting a fitness condition equivalent to lifetime citations below about 8.5.
- The paper notes that this analytical threshold is consistent with empirical findings that preferential attachment is masked by initial attractiveness for papers with fewer than roughly seven citations.

## Caveats

- The threshold is model-specific and should not be treated as a universal citation-count law.
- Citation databases, fields, and document types vary in baseline citation rates, so observable thresholds need recalibration.
- Initial attractiveness, visibility, field size, and indexing artifacts can mimic or mask preferential attachment.
- Low-citation papers are numerous, so threshold treatment can strongly affect aggregate model fit.

## Links

- [preferential attachment](preferential_attachment.md)
- [cumulative advantage](cumulative_advantage.md)
- [paper fitness](../measures/paper_fitness.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md)
- [citation aging and obsolescence](citation_aging_obsolescence.md)
- [attention inequality](attention_inequality.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `preferential_attachment_activation_threshold`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: cumulative-advantage turn-on threshold; preferential-attachment threshold; low-fitness lognormal regime; attachment detectability threshold
