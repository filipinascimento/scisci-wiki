# Preferential-attachment old-paper competition bias

## Summary

Preferential attachment misses delayed recognition partly because older papers dominate attachment probability before young sleepers can awaken.

## Canonical Form

- Unit of analysis: citation network, preferential-attachment baseline, paper age, citation count, high-B paper, or simulated citation history.
- Typical representation: temporal preferential-attachment baseline with old-paper competition.
- Mechanism, measurement, or validation target: failure mode of cumulative-advantage models for sleeping beauties.
- Empirical signature: empirical sleeping beauties remain low-citation in PA simulations because younger candidates compete against already older and cited papers..

## Uses in Science of Science

- Refines citation-model validation by linking it to [preferential attachment](../mechanisms/preferential_attachment.md) and [cumulative advantage](../mechanisms/cumulative_advantage.md).
- Useful as a reusable check when [citation model first mover limit](citation_model_first_mover_limit.md) is interpreted from citation histories.
- Adds cross-links to [sleeping beauty null model gap](sleeping_beauty_null_model_gap.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Simulate preferential-attachment reassignment in temporal order.
- Track whether empirical high-B papers receive delayed bursts or remain low citation under the baseline.
- Inspect how much probability mass older papers absorb before young potential sleepers can awaken.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) finds PA gives slowly increasing but low citation totals for top empirical sleeping beauties and explains that relatively young papers lose probability mass to older papers.
- The motif links sleeping-beauty failure to a first-mover bias inside PA.

## Caveats

- This applies to a simple PA baseline.
- Richer models with aging, topicality, fitness, or field structure may behave differently.

## Links

- [Preferential attachment](../mechanisms/preferential_attachment.md)
- [Cumulative advantage](../mechanisms/cumulative_advantage.md)
- [Citation-model first-mover limit](citation_model_first_mover_limit.md)
- [Sleeping-beauty null-model gap](sleeping_beauty_null_model_gap.md)
- [Paper fitness](../measures/paper_fitness.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying Sleeping Beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; SciSciNet: W2171817276; WoS: unknown]

## Metadata

- Concept ID: `preferential_attachment_old_paper_competition_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: PA age-competition bias; old-paper attachment drag; cumulative-advantage SB failure
