# Team-size tail log binning

## Summary

Team-size tail log binning is a histogram method that bins large author-count values on a logarithmic scale to reveal rare large-team behavior.

## Canonical Form

- Unit of analysis: article team size, field-period team-size distribution, or large-team tail.
- Typical representation: log-log team-size distribution with fixed log-decade bins for large `k`.
- Method target: make low-frequency mega-team observations visible without letting single author-count cells dominate the tail.
- Empirical signature: the small-team body and the large-team tail can be inspected on the same distributional plot.

## Uses in Science of Science

- Provides a tail-estimation companion to [article team-size distribution](../measures/article_team_size_distribution.md).
- Feeds [team-size distribution decomposition](team_size_distribution_decomposition.md) by exposing the power-law tail and the low-`k` hook.
- Helps diagnose [Fermi collaboration tail excess](../validations/fermi_collaboration_tail_excess.md).
- Adapts the idea behind [log-binned citation distribution estimator](log_binned_citation_distribution_estimator.md) to team-size distributions.

## Operationalization

- Count authors per paper in a fixed field and period.
- Plot exact small team sizes and log-binned large team sizes.
- Use fixed logarithmic bin widths for tail values so rare mega-team sizes are not lost.
- Report binning thresholds and bin width alongside any fitted tail model.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) compares astronomy team-size distributions on a log-log scale.
- The paper bins large team sizes in intervals of 0.1 decades to reveal tail behavior where frequencies are up to a million times lower than the distribution peak.
- This display supports the contrast between a 1961-1965 Poisson-like distribution and a 2006-2010 distribution with an extensive power-law tail.

## Caveats

- Log binning is a visualization and estimation aid, not a model by itself.
- Tail bin choices can affect perceived slope and tail onset.
- Tail displays should be paired with raw small-team counts because most papers remain in the low-author-count region.

## Links

- [article team-size distribution](../measures/article_team_size_distribution.md)
- [team-size distribution decomposition](team_size_distribution_decomposition.md)
- [Fermi collaboration tail excess](../validations/fermi_collaboration_tail_excess.md)
- [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md)
- [log-binned citation distribution estimator](log_binned_citation_distribution_estimator.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; SciSciNet: W2109746829; WoS: unknown]

## Metadata

- Concept ID: `team_size_tail_log_binning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: log-binned team-size tail; author-count tail binning; team-size log histogram; large-team tail binning
